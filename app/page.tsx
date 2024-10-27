
import AuthButton from '@/Components/auth/AuthStatus';
import UserProfile from '@/Components/auth/UserProfile';

export default function Home() {
  return (
    <main>
      <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
        <img className="w-50 h-16 mt-6" src='https://forum.morphl2.io/uploads/default/original/1X/3b023bf90c9933da953618a305b7e01e23676c70.png' alt=''/>
          <AuthButton/>
        </div>
      </div>
        <div className='text-center mt-46 text-8xl font-bold text-green-500'>Build on Morph 🐨</div>
        <UserProfile />
    </main>
  );
}