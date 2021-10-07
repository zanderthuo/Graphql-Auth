const User = require('../models/User')

// Resolvers
const resolvers = {
    Query: {
        getAll: async () => {
            return await User.find();
        },
    },
    Mutation: {
        createUser: async (parents, args, context, info) => {
            const { username, email, password } = args.user
            const user = await new User({username, email, password}).save();
            return user;
        },
        updateUser: async (parents, args, context, info) => {
            const { id } = args
            const { username, email } = args.user
            const user = await User.findByIdAndUpdate(id, {username, email}, {new: true});
            return user;
        },
        deleteUser: async (parents, args, context, info) => {
            const { id } = args;
            await User.findByIdAndDelete(id);
            return "Deleted";
        },
        login: async ({ email,password, }) => {
            const user = User.findOne({ email: email });
            if (!user){
                throw new Error("User does not exits")
            }
        }
    }
}

module.exports = resolvers;