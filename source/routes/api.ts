import express from 'express';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import con from '../config/database';
import moment from 'moment';
import verifyToken from '../middleware/auth';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send("hello world")
});

//LOGIN API RETURN JWT TOKEN
router.get('/login', (req: Request, res: Response) => {
    let token = jwt.sign({user: "admin"}, "altaf", { expiresIn: 60*60})
    // console.log(token)
    res.send({
        "token": token
    })
});

router.post('/addCompany', verifyToken, (req, res) => {
    if(!(req.body.company_name && req.body.ceo_name && req.body.address && req.body.date)){
        return res.status(400).send("company_name, ceo_name, address and date are required")
    } else if(moment(req.body.date, 'YYYY/MM/DD',true).isValid() != true){
        return res.status(400).send(" date is required in this format YYYY/MM/DD")
    }
    
    let data = {
        cname: req.body.company_name,
        cceo: req.body.ceo_name,
        caddress: req.body.address,
        cdate: req.body.date
    }

    con.query('INSERT into company SET ?', data, (err, success) => {
        if(err) {
            console.log(err);

            if(err.errno == 1062){
                return res.status(400).send("Company " + req.body.company_name + " already exists");
            }

            return res.status(400).send("Error. Please try again later");
        }

        // console.log(success)

        return res.send("Company added successfully with ID "+ success.insertId)
    })
});

//SEARCH COMPANY BY NAME
router.post('/searchCompany', verifyToken, (req, res) => {
    if(!(req.body.company_name)){
        return res.status(400).send("company_name is required")
    } 

    con.query('SELECT * FROM company WHERE cname =?', req.body.company_name, (err, data) => {
        if(err){
            console.log(err);

            return res.status(400).send("Error. Please try again later")
        }

        if(data.length == 0){
            return res.send("No company exists with name "+ req.body.company_name)
        }

        return res.send(data)
    });
});

//GET API RETURNS COMPANY INFORMATION
router.get('/getCompany/:id', verifyToken, (req, res) => {

    if(!req.params.id){
        return res.status(400).send("Please enter valid ID")
    }

    let id = req.params.id;

    con.query('SELECT * FROM company WHERE uuid =?', id, (err, data) => {
        if(err){
            console.log(err);

            return res.status(400).send("Error. Please try again later")
        }

        if(data.length == 0){
            return res.send("No company exists with ID "+ id)
        }

        return res.send(data)
    });
});

//POST API ADDS TEAM TO COMPANY
router.post('/addTeam/:id', verifyToken, (req, res) => {

    if(!(req.params.id && req.body.lead_name)){
        return res.status(400).send("Please enter ID and lead_name")
    }

    let data = {
        cid: req.params.id,
        tleadname: req.body.lead_name
    }

    con.query('INSERT into team SET ?', data, (err, success) => {
        if(err) {
            console.log(err.errno);

            if(err.errno == 1452){
                return res.status(400).send("Invalid Company ID");
            }

            return res.status(400).send("Error. Please try again later");
        }

        // console.log(success)

        return res.send("Team added successfully with ID "+ success.insertId)
    })
});

//GET API RETURN ALL TEAM
router.get('/getTeam', verifyToken, (req, res) => {

    con.query('SELECT company.cname, team.tleadname FROM company INNER JOIN team ON company.uuid = team.cid;', (err, data) => {
        if(err){
            console.log(err);

            return res.status(400).send("Error. Please try again later");
        }

        if(data.length == 0){
            return res.send("No Team found");
        }

        interface TeamLead {
            Team: String
        }

        interface Groups {
            [index: string]: TeamLead[]
        }

        let groups : Groups = {};

        interface Teams {
            cname: string
            tleadname: String
        }
        data.forEach((teams: Teams) => {
            if(!groups[teams.cname]){
                groups[teams.cname] = [] as any;
            }

            groups[teams.cname].push({
                "Team": teams.tleadname
            });
        });

        return res.send(groups)
    });
});

export = router;