import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ServiceHeader from '../components/Services/ServiceHeader';
import ServiceBenefits from '../components/Services/ServiceBenefits';
import FAQ from '../components/Services/Faq'

export default function Services() {
  return (
    <div>
      <Nav />
      <ServiceHeader />
      <ServiceBenefits />
      <FAQ />
      {/* <Footer /> */}
    </div>
  )
}

