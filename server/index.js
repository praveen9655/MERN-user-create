const express =require('express')
const mongoose =require('mongoose')
const cors =require('cors')
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ["https://mern-user-create.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }

))

const dbUrl = "mongodb+srv://praveeen:5A4k053kfcKhXAyP@arjceterp.23k4i1t.mongodb.net/TestLogin?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, connectionParams)
.then(async () => {
    console.info("Connected to the DB");
});


app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    EmployeeModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json('success')
            }
            else{
                res.json('The password is incorrect')
            }
        } else{
            res.json('No record existed')
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001,() =>{
    console.log('server is running')
})
