import {
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Medical Transportation',
    description:
      'We provide transportation to and from medical appointments, including visits to hospitals, clinics, and specialty centers.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Social Transportation',
    description:
      'We offer transportation to social events, such as visits to friends and family, outings to local attractions, and more.',
    icon: MegaphoneIcon,
  },
  {
    name: 'Customized Transportation',
    description:
      'We can tailor our services to meet the specific needs and preferences of our clients, including accommodating special requests.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Transparent Fees',
    description:
      'When booking your ride you may select to make a secure payment with your credit card or enter your insurance information for processing your ride fee.',
    icon: CurrencyDollarIcon,
  },
];

const Benefits = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 uppercase tracking-widest">
            your ride benefits
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Safe, Reliable Transportation for Cleveland&apos;s Residents
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to provide safe, reliable, and comfortable
            transportation for residents to medical appointments, social events,
            and other destinations in the Cleveland area.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6602]">
                    <benefit.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
