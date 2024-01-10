import React from 'react';
const styles = {
  input:
    'p-[30px] w-full border-[2px] border-[#2e374a] bg-gb text-white rounded-[5px]',
};

const Login = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <form
        action=''
        className='flex p-[50px] rounded-[10px] flex-col bg-bgSoft w-[500px] h-[500px] items-center gap-y-[30px]'
      >
        <h1>Login</h1>
        <input type='text' placeholder='username' className={styles.input} />
        <input type='text' placeholder='password' className={styles.input} />
        <button className='w-full rounded-[5px] p-[30px] text-white bg-teal-300 border-none cursor-pointer'>Login</button>
      </form>
    </div>
  );
};

export default Login;
