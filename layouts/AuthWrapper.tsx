import { useSession } from "next-auth/react";
import Router from "next/router";
import { ReactNode, useEffect } from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  width: 100vw;
  height: 5vh;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(255, 199, 199, 0.7);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  width: 100vw;
  height: 5vh;
  background-color: #ffffff;
  border-top: 1px solid rgba(255, 199, 199, 0.7);
`;

const Main = styled.footer`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  height: calc(100vh - 10vh - 20px);
`;

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  if (status === "authenticated")
    return (
      <>
        <NavBar></NavBar>
        <Main>{children}</Main>
        <Footer></Footer>
      </>
    );

  return <div>loading</div>;
}