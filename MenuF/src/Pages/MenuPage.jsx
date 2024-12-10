import CocktailSection from "../Components/Cocktail/CocktailSection"
import ContactFindUs from "../Components/Contact/ContactFindUs"
import Footer from "../Components/Footer/Footer"
import MenuSection from "../Components/Menu/MenuSection"
import MenuTabs from "../Components/Menu/MenuTabs"
import NavbarHeading from "../Components/Navbar/Navbar"



function menuPage() {
  return (
   <>
   <NavbarHeading/>
   <MenuSection/>
   <MenuTabs/>
   <CocktailSection/>
   <ContactFindUs/>
   <Footer/>
   </>
  )
}

export default menuPage
