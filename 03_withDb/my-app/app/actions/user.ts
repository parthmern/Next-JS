"use server"             // specify while creating server actions

import prisma from '@/db';


async function signupAction(username:string, password: string) {
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    });
    console.log(user);
    return user; 
}

export {signupAction}; 