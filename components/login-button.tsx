import Link from "next/link";

interface LoginButtonProps {
  loginUrl: string;
  mobileButtonColor: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ loginUrl, mobileButtonColor }) => {
  return (
    <Link href={loginUrl} target="_blank" >
      <button
      style={{backgroundColor: mobileButtonColor }}
      className="py-1 px-3 rounded text-white w-full" >
        Entrar
      </button>
    </Link>
  );
};
export default LoginButton;
