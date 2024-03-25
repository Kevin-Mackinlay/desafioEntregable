import CustomError from "../customErrors/customError.js";
import typeErrors from "../customErrors/enums.js";
import { generateUserErrorInfo } from "../customErrors/info.js";

export default class UsersController {
  constructor(UsersService) {
    this.usersService = UsersService;
  }
  getUsers = async (req, res) => {
   try {
      const usersDb = await this.usersService.getUsers();
      return usersDb;
    }
    catch (error) {
      throw error;
    }
  };
  createUser = async (newUser) => {
    try {
      const { first_name, last_name, email, password } = req.body;
      if (!first_name || !last_name || !email || !password) {
      CustomError.createError({
        name:"Error creando usuario",
      cause: generateUserErrorInfo(req.body),
      message: "Faltan datos obligatorios",
      code:typeErrors.INVALID_TYPES_ERROR,

      
      });
      const userDb = await this.usersService.create(newUser);
      return userDb;
    }
    }
    catch (error) {
      throw error;
    }

   
   
  };

  modifyUser = async (id, user) => {
    try {
      const userDb = await this.usersService.modify(id, user);
      return userDb;
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (id) => {
    try {
      const userDb = await this.usersService.getUserById(id);
      return userDb;
    } catch (error) {
      throw error;
    }
  };
  deleteUser = async (id) => {
    try {
      const userDb = await this.usersService.delete(id);
      return userDb;
    } catch (error) {
      throw error;
    }
  };
}
