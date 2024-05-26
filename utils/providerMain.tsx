'use client'

import React from 'react';
import {SessionProvider} from "next-auth/react";
import {Provider} from "react-redux";
import {reduxStore} from "@/store/redux";
import 'dotenv/config'

type Props = {
    children: React.ReactNode;
};

export const ProviderMain = ({children}: Props) => {

    return <SessionProvider>
        <Provider store={reduxStore}>
            {children}
        </Provider>
    </SessionProvider>;
};
