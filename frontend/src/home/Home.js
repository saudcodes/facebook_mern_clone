import Features from "./Features";

export default function Home(props){
  return (
    <div>
      <section class="banner">
        <h1>Exercise your brain!</h1>
      </section>
      <Features features = {props.features}/>
    </div>
  )
}