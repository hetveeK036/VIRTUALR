import { communityLinks, platformLinks, resourcesLinks } from "../Constant/constant"

const Footer = () => {
  return (
 <footer className=" mt-20 border-t py-10  border-neutral-700">
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
    <div>
      <h5 className="font-semibold text-md mb-4">
        Resources
      </h5>
      <ul className="space-y-2">
        {resourcesLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-neutral-300 hover:text-white" >{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h5 className="font-semibold text-md mb-4">
        Platforms
      </h5>
      <ul className="space-y-2">
        {platformLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-neutral-300 hover:text-white" >{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h5 className="font-semibold text-md mb-4">
        Community
      </h5>
      <ul className="space-y-2">
        {communityLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-neutral-300 hover:text-white" >{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>

 </footer>
  )
}

export default Footer
