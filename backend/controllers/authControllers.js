import adminModel from "../models/adminModel.js"
import responseReturn from "../utiles/response.js";
import bcrypt from "bcrypt";

class authControllers {
    admin_login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const admin = await adminModel.findOne({ email }).select('+password');
            if (admin) {
                const match = await bcrypt.compare(password, admin.password)
                console.log(match)
                if (match) {
                    const token =  await createToken({
                        id: admin.id,
                        role:admin.role
                    })
                } else {
                    responseReturn(res, 404, { error: "password Wrong" })
                }
            } else {
                responseReturn(res, 404, { error: "email not found" })
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }
}


export default new authControllers();