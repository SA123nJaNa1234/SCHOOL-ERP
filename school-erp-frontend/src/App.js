import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/Students/StudentList';
import StudentDetail from './pages/Students/StudentDetail';
import './styles/global.css';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/students" exact component={StudentList} />
                <Route path="/students/:id" component={StudentDetail} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;