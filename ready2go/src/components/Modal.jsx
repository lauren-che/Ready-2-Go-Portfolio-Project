import user from '../assets/usericon.svg';
import address from '../assets/addressicon.svg';
import phone from '../assets/phoneicon.svg';
import email from '../assets/emailicon.svg';
import office from '../assets/officeicon.svg';

const Modal
 = ({closeModal}) => {
  
  return (
    <div
      className="flex fixed justify-center items-center w-[100vw] h-[100vh] p-6 mx-auto"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className="p-8 flex flex-col w-[800px] h-[580px] bg-[#232323] shadow-xl text-[#FFF5E1] border-[#FFF5E1] border-[0.1rem] rounded-[1rem]"
      >
        <div className="justify-center">
          <main className="justify-between flex-row items-center">
            <h2 className="pt-8 text-3xl font-bold">Book A Ride</h2>
            <h4 className="mt-4 uppercase tracking-[0.2rem]">
              pick up information
            </h4>
          </main>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="rounded-lg">
              <input
                id="pickup date"
                type="date"
                className="appearance-none block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-xs"
              />
            </div>
            <div className="relative">
              <label htmlFor="email"></label>
              <input
                id="email"
                type="email"
                placeholder="Customer Email"
                className="block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full  focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder-[#FFF5E1] placeholder:text-xs"
              />
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <img src={email} alt="email icon" />
              </span>
            </div>
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Customer Name"
                className="block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full  focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder-[#FFF5E1] placeholder:text-xs"
              />
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <img src={user} alt="user icon" />
              </span>
            </div>
            <div className="relative">
              <input
                id="insurance company name"
                type="text"
                placeholder="Insurance Company Name"
                className="block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full  focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder-[#FFF5E1] placeholder:text-xs"
              />
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <img src={office} alt="office icon" />
              </span>
            </div>
            <div className="relative">
              <input
                id="pickup address"
                type="text"
                placeholder="Pick Up Address"
                className="block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full  focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder-[#FFF5E1] placeholder:text-xs"
              />
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <img src={address} alt="address icon" />
              </span>
            </div>
            <div className="relative">
              <input
                id="insurance company address"
                type="text"
                placeholder="Insurance Company Address"
                className="block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full  focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder-[#FFF5E1] placeholder:text-xs"
              />
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <img src={address} alt="address icon" />
              </span>
            </div>
            <div className="relative">
              <input
                id="drop off address"
                type="text"
                placeholder="Drop Off Address"
                className="block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full  focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder-[#FFF5E1] placeholder:text-xs"
              />
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <img src={address} alt="address icon" />
              </span>
            </div>
            <div className="relative">
              <input
                id="insurance company phone"
                type="text"
                placeholder="Insurance Company Phone Number"
                className="block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full  focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder-[#FFF5E1] placeholder:text-xs"
              />
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <img src={phone} alt="phone icon" />
              </span>
            </div>
            <div className="relative">
              <input
                id="customer phone number"
                type="text"
                placeholder="Customer Phone Number"
                className="block w-[22rem] h-10 px-4 py-2 mt-2 text-[#FFF5E1] bg-[#232323] border border-[#FFF5E1] rounded-full  focus:border-[#FF6602] focus:ring-[#FF6602] focus:ring-opacity-40 focus:outline-none focus:ring placeholder-[#FFF5E1] placeholder:text-xs"
              />
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <img src={phone} alt="phone icon" />
              </span>
            </div>
            <div className="pl-8">
              <input
                id="checkedBox"
                type="checkbox"
                className="accent-[#14968F] hover:cursor-pointer"
              />
              <label
                htmlFor="checkedBox"
                className="inline-block pl-[0.5rem] hover:cursor-pointer bordered-checkbox-[#14968F] text-xs"
              >
                I agree to be{' '}
                <span className="text-[#FF6602]">
                  returned back to pickup address
                </span>
              </label>
            </div>
          </div>
        </form>
        <button className="w-full bg-[#FF6602] rounded-full mt-8 p-2 text-lg">
          Book A Ride
        </button>

        <button
          onClick={() => closeModal(false)}
          className="text-[#636363] m-4 text-xs"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal
