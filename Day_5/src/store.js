import { signify } from "react-signify"

export const sUser = signify({
    name: 'Tri',
    age:18,
    },
    {
        syncKey: 'user'
    }
)