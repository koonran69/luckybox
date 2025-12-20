import Area from './Area'
import Web from './Web'
import Dashboard from './Dashboard'
import Admin from './Admin'
import Blog from './Blog'
import ContactForm from './ContactForm'
import DataStore from './DataStore'
import Order from './Order'
import Product from './Product'
import Setting from './Setting'
import User from './User'
import Voucher from './Voucher'

const Domains = {
    Area: Object.assign(Area, Area),
    Web: Object.assign(Web, Web),
    Dashboard: Object.assign(Dashboard, Dashboard),
    Admin: Object.assign(Admin, Admin),
    Blog: Object.assign(Blog, Blog),
    ContactForm: Object.assign(ContactForm, ContactForm),
    DataStore: Object.assign(DataStore, DataStore),
    Order: Object.assign(Order, Order),
    Product: Object.assign(Product, Product),
    Setting: Object.assign(Setting, Setting),
    User: Object.assign(User, User),
    Voucher: Object.assign(Voucher, Voucher),
}

export default Domains