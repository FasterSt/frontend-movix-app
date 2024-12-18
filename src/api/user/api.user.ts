// https://reqres.in

import { fetcher } from "@/configs/configApi"
import { NEXT_PUBLIC_BACKEND_URL } from "../../../config"

export const getUser = async () => {
    const res = await fetcher(`${NEXT_PUBLIC_BACKEND_URL}/api/auth/test-guards`)

    console.log(res);
}