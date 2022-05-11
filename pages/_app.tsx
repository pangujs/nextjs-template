import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Layout from "../layouts/basicLayout";
import type { NextPage } from "next";
import React from "react";
import type { BareFetcher } from "swr";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// 自定错误类型
interface CustomError extends Error {
  info?: string;
  status?: string | number;
}

// 错误处理
const fetcher: BareFetcher = async (url, params = {}) => {
  const res = await fetch(url, params);
  // 如果状态码不在 200-299 的范围内，
  // 我们仍然尝试解析并抛出它。
  if (!res.ok) {
    const error: CustomError = new Error(
      "An error occurred while fetching the data."
    );
    // 将额外的信息附加到错误对象上。
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default App;
