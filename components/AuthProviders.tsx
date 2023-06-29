'use client';
import { signIn, getProviders } from 'next-auth/react'
import { useState, useEffect } from "react";
import Button from './Button';

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | null;
}
type Providers = Record<string, Provider>;

const AuthProviders = () => {
    const [providers, setProviders] = useState<Providers | null>(null);
    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
            setProviders(res);
            console.log(res);
        }
        fetchProviders();
    }, [])
    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: Provider, index) => (
                    <Button
                        key={index}
                        handleClick={() => signIn(provider?.id)}
                        title='Sign In'
                    />
                ))}
            </div>
        )
    }
}

export default AuthProviders