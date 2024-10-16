import conf from '../conf/conf.js';
import { Client, Account, Storage, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;
    storage;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
        this.storage = new Storage(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
                return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return error;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    async imagePreview({imageId}) {
        try {
            return this.storage.getFilePreview(conf.appwriteBucketId ,imageId);
        } catch (error) {
            console.log("Appwrite serive :: Image Preview :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;

