import Feature from "./Feature"

export default function Features(props){

  return (
    <div>
      <header class="features__header">Features</header>
      <section class="features">
        <div>
          {props.features.map(f => <Feature feature_title = {f.feature_title} feature_desc = {f.feature_desc} />)}
        </div>
      </section>
    </div>
  )
}