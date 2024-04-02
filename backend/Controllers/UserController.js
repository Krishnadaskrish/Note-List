const User = require ('../Model/UserModel')
const jwt = require ('jsonwebtoken')
const Notes = require ('../Model/NoteModel')



module.exports = {

    UserRegisteration : async (req,res)=>{
        try {

            const {name , email , password} = req.body

            await User.create({
                name: name,
                email: email,
                password: password,
              });
              res.status(201).json({
                status: "success",
                message: "user registration successfull.",
              });


        } catch (error) {

            res.status(400).json({status : error , Message : "failed to register"})
        }
    } ,

    
    userLongin: async (req, res) => {
        const { email , password } = req.body
       
        
  
        const user = await User.findOne({ email: email });
        
        if (!user) {
          return res.status(404).json({ status: "error", message: "User not found" });
        }
        
        const token = jwt.sign(
          { email: user.email },
          
          process.env.USER_ACCESS_TOKEN_SECRET,
          {
            expiresIn: 86405,
          }
          
        );
        res.status(200).json({ status: "success",
         message: "Login successful",
         data: token });
      },


      createNote : async(req,res) =>{
        try {
          const {titie,description,color} = req.body

        await Notes.create({
          title : titie,
          description : description,
          color : color
        })
        res.status(201).json({status : "success " ,message : "succesfully created note "})




      } catch (error) {

        res.status(400).json({status :error , message : "failed to create"})
          
        }

      },


      getNotes : async(req,res)=>{
        try {

          const getNotes = await Notes.find()
          res.status(200).json({status:"success" ,message : " succesfully fetche notes" , Notes :getNotes})
          
        } catch (error) {
          res.status(500).json({staus : error , message : "failed to fetch data"})
        }

      },

      editNote : async(req,res)=>{
       try {

        const id = req.params.id
        const {title,description,color} = req.body
        const NoteID = await Notes.findById({id})

        await Notes.updateOne(
          { _id: id },
          {
            $set: {
              title: title,
              description: description,
              color : color
              
            },
          }
        );

        res.status(200).json({staus:"success" , message:"successfully"})

        
       } catch (error) {
        res.status(500).json({staus:error,message:'failed to edit notes '})
        
       }


      },

      deleteNote :async(req,res)=>{
        try {
          const {id} = req.params
          const deletenotes = await User.findByIdAndDelete({_id:id})
          res.status(203).json({staus:'success',message: "successfully deletes the note"})
          
        } catch (error) {
          res.status(401).json({staus:error,message:"failed to delete the note"})
          
        }
     
      }
    }


        
