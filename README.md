# keidiUniverse

관심있는 주식에 대한 재무정보를 시각화하고 투자에 활용하기 위한 페이지를 만듭니다.

웹페이지 구성

global Router {
/ -> Home
/join -> Join
/login -> Login
/search -> Search

}

user Router {
/users/:id -> User's profile
/users/edit -> Edit My profile
/users/delete -> Delete user
/users/logout -> Log Out
}

company Router {
/company/universe -> Universe
/company/upload -> Upload Company Data
/company/:id/edit -> Edit Company Data
/company/:id/chart
/company/:id/rim
/company/:id/data
}
