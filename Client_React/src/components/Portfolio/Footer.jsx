

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().toLocaleString('default', { month: 'long' });

    return `${currentMonth} ${currentYear}`;
  };
  return (
    <footer className=''>
      <div className='flex flex-col mt-10 justify-around items-center '>
      
      <p className='text-center text-white'>Copyright &#169; {getYear()} Krishna Alaspure. All Rights Reserved </p>
      </div>
    </footer>
  )
}

export default Footer
