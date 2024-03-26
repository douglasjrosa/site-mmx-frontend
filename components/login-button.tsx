import Link from "next/link";

interface LoginButtonProps {
  loginUrl: string;
  loginButtonCollor: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ loginUrl, loginButtonCollor }) => {
  return (
    <Link href={loginUrl} target="_blank" >
      <button className={`py-1 px-3 rounded text-white w-full ${loginButtonCollor}`}>
        Entrar
      </button>
    </Link>
  );
};
export default LoginButton;
