export default function Card(props) {
  return (
    <div className="w-full md:max-w-xl mx-auto p-2 md:pt-4 flex flex-col gap-2 bg-white rounded-lg md:relative h-auto md:h-40 md:max-h-max shadow-md">
      {props.children}
    </div>
  )
}