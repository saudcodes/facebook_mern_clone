export default function Navbar(props){
  return (
    <div>
       <header class="main-header">
            <div>
                <div class="logo"><a href="index.html"></a></div>
                <a href="index.html">Quizzer</a>
            </div>
            <nav class="main-nav">
                <ul class="main-nav__items">
                    <li class="main-nav__item">
                        <a href="./about.html">About</a>
                    </li>
                    <li class="main-nav__item">
                        <a href="./quiz.html">Quiz</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}