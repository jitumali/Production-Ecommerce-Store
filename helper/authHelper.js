const bcrypt = require('bcrypt');

const hashPassword = async(password) => {
    try{
        const hashPassword = await bcrypt.hash(password,10)
        return hashPassword
    }catch(error){
        console.log(error)
    }
};

const comparePassword = async (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}

module.exports = {hashPassword,comparePassword} 