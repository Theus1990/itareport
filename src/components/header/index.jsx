import "./style.css"

function Header() {
    return (
        <nav class='navbar border-bottom border-secondary'>
            <div class='d-flex container-fluid justify-content-between'>
                <a
                    class='navbar-brand fs-4 justify-content-between align-items-center text-light'
                    href='/'
                >
                    ItaReport
                </a>
                <div class='nav-item'>
                    <a class='btn btn-info me-3' href='/login/'>
                        Login
                    </a>
                    <a
                        class='text-light text-decoration-none'
                        href='/register/'
                    >
                        Cadastrar
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header
