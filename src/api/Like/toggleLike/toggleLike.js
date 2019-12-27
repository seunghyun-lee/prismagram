import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        toggleLike: async (_, args, { request }) => {
             isAuthenticated(request);
             const { postId } = args;
             const { user } = request;
             const filterOption = {
                AND: [
                    {
                        user: {
                            id: user.id
                        }
                    },
                    {
                        post: {
                            id: postId
                        }
                    }
                ]
             };
             try {
                 const existingLike = await prisma.$exists.like({filterOption});
                 if(existingLike) {
                    //  TO DO
                 } else {
                     await prisma.createLike({filterOption});
                 }
                 return true;
             } catch {
                 return false;
             }
        }
    }
};