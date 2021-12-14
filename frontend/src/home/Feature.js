export default function Feature(props){
  return (
    <article class="feature">
      <h1>{props.feature_title}</h1>
      <div>
        <p class="feature-desc">{props.feature_desc}</p>
      </div>
    </article>
  )
}