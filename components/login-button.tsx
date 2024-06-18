import Link from "next/link";

interface LoginButtonProps {
  loginUrl: string;
  mobileButtonColor: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ loginUrl, mobileButtonColor }) => {
  return (
    <Link href={loginUrl} target="_blank" >
      <button className="py-1 px-4 rounded text-white w-full bg-lime-700 text-lg" >
        Entrar
      </button>
    </Link>
  );
};
export default LoginButton;
