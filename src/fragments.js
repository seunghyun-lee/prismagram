export const USER_FRAGMENT = `
    fragment UserParts on User {
        id
        username
        email
        firstname
        lastname
        following {
            caption
        }
    }
`;