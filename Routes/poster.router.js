import express from 'express';
import PosterController from '../Controllers/poster.controller.js';

// Kalder instans af artist controller
const controller = new PosterController();

// Sætter OrgRouter objekt fra express
const PosterRouter = express.Router();

// Peger routes på metoder i controller
PosterRouter.get('/poster/list', (req, res) => { controller.list(req,res) })
<<<<<<< HEAD
PosterRouter.get('/poster/list/:genre([a-zA-Z-_]*)', (req, res) => { controller.list(req,res) })
PosterRouter.get('/poster/details/:id([0-9]*)', (req, res) => { controller.details(req,res) })
=======
PosterRouter.get('/poster/list/:genre_slug([a-zA-Z-_]*)', (req, res) => { controller.list(req,res) })
PosterRouter.get('/poster/details/:slug([a-zA-Z-_]*)', (req, res) => { controller.details(req,res) })
>>>>>>> fd35defe3e6be8cf94656d01a236d3a989aaf767
PosterRouter.put('/poster/:id([0-9]*)', (req, res) => { controller.update(req,res) })
PosterRouter.delete('/poster/:id([0-9]*)', (req, res) => { controller.delete(req,res) })

//PosterRouter.get('/tool', (req, res) => { controller.tool(req,res) })

export default PosterRouter