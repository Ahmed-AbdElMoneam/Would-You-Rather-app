{this.props.users.map((user)=> {
    return(
        <option key={1} value={user}>{user.name}</option>
    )
})}

<option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>


<Route path="/home" component={Home}/>
<Route path="/newQuestion" component={Newquestion}/>
                <Route path="/leaderboard" component={Leaderboard}/>

<NavBar />
          <Switch>
            <Route exact path="/login" component={Sign}/>
            <ProtectedRoute exact path="/" component={Home}/>
            <ProtectedRoute exact path="/newQuestion" component={Newquestion}/>
            <ProtectedRoute exact path="/leaderboard" component={Leaderboard}/>
            <Route path="/404" component={PageNotFound}/>
          </Switch>
          <Route exact path="/login" component={Sign}/>