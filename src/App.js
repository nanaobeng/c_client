import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import NotFoundPage from './core/NotFoundPage';
import Home from './core/Home';
import About from './core/AboutUs';
import Team from './core/Team';
import TeamMember from './core/TeamMember';
import Services from './core/Services';
import Service from './core/Service';
import Credentials from './core/Credentials';
import Contact from './core/Contact';
import CreateInsight from './admin/AddInsight';
import ManageTeam from './admin/ManageProducts';
import CreateEmployee from './admin/AddTeamMember';
import UpdateEmployee from './admin/UpdateProduct';
import UpdateInsights from './admin/UpdateInsights';
import PrivateRoute from './auth/PrivateRoute'
import Signin from './user/Signin'
import Newsletter from './core/Newsletter'
import Csr from './core/Csr'
import KnowledgeBank from './core/KnowledgeBank'
import SingleNewsletter from './core/SingleNewsletter'
import SingleCSR from './core/SingleCSR'
import './styles.css'
import ManageInsights from './admin/ManageInsights';
import Dashboard from './admin/AdminDash';
import AddKnowledge from './admin/AddKnowledge';
import AddAdmin from './admin/AddAdmin';
import ResetPassword from './user/ResetPassword';
import ForgotPassword from './user/ForgotPassword';

const App = () => {
    return (
    <BrowserRouter>
        <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/about-us" exact component={About}/>
        <Route path ="/team" exact component={Team}/>
        <Route path ="/services" exact component={Services}/>
        <Route path ="/credentials" exact component={Credentials}/>
        <Route path ="/team/:individualId" exact component={TeamMember}/>
        <Route path ="/insights/newsletter/:individualId" exact component={SingleNewsletter}/>
        <Route path ="/insights/csr/:individualId" exact component={SingleCSR}/>
        <Route path ="/service/:serviceId" exact component={Service}/>
        <Route path ="/contact" exact component={Contact}/>
        <Route path ="/signin" exact component={Signin}/>
        <Route path ="/insights/newsletters" exact component={Newsletter}/>
        <Route path ="/insights/knowledge_bank" exact component={KnowledgeBank}/>
        <Route path ="/user/forgot-password" exact component={ForgotPassword}/>
        <Route path ="/insights/csr" exact component={Csr}/>
        <Route path ="/reset-password" exact component={ResetPassword}/>
        <PrivateRoute path ="/admin/add_insight" exact component={CreateInsight}/>
        <PrivateRoute path ="/admin/add_employee" exact component={CreateEmployee}/>
        <PrivateRoute path ="/admin/knowledge_bank" exact component={AddKnowledge}/>
        <PrivateRoute path="/admin/team" exact component={ManageTeam} />
        <PrivateRoute path="/admin/insights" exact component={ManageInsights} />
        <PrivateRoute path="/admin/team/update/:productId" exact component={UpdateEmployee} />
        <PrivateRoute path="/admin/insight/update/:productId" exact component={UpdateInsights} />
        <PrivateRoute path="/admin/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/admin/add_admin" exact component={AddAdmin} />
        <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>)
};


export default App;

