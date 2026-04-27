import useStore from '../store'

const TEAM = [
  {
    photo: '/team-zalan.jpg',
    name: 'Zalán Gellén',
    role: 'Co-founder',
    bio: [
      "Zalán Gellén is a student at Corvinus University of Budapest, where he studies International Business in English with a focus on globally scalable ventures. He has a strong interest in startups and innovation, and has gained experience within one of Hungary's leading startup environments, including Diverzum.",
      "Growing up in a family of physicians, he developed an early understanding of both the clinical and administrative realities of healthcare. While his parents' dedication to patient care set a strong example, he also witnessed the significant burden that documentation places on physicians.",
      'This experience led to the creation of Voxana, a solution designed to reduce administrative workload through structured clinical documentation, enabling physicians to focus more on patient care while maintaining accuracy and control.',
    ],
  },
  {
    photo: '/team-david.jpg',
    name: 'Dávid Levente Báló',
    role: 'Co-founder',
    bio: [
      "Dávid Levente Báló is a student at Corvinus University of Budapest, where he studies International Business. He has a strong interest in strategy, data-driven business development and innovation, with experience in European supply chain planning at Henkel and product development as Lead Product Developer of EduVenture.",
      "Having known Zalán since elementary school, later attending the same high school and now studying the same field at university, he brings a long-standing personal connection and shared entrepreneurial mindset to Voxana. Their friendship has grown alongside a mutual interest in building scalable solutions to meaningful problems.",
      "Through his analytical background, startup experience and interest in structured systems, Dávid contributes a business-focused perspective to Voxana's mission: reducing physicians' administrative workload through efficient, accurate and structured clinical documentation, allowing them to focus more on patient care.",
    ],
  },
]

export default function StepTeam({ active }) {
  return (
    <div className={`panel about-panel ${active ? 'active' : ''}`} id="p-team">
      <div className="about-hero">
        <div className="about-hero-inner">
          <div className="about-eyebrow">About Us</div>
          <h1 className="about-headline">
            The people behind Voxana.
          </h1>
        </div>
      </div>

      <div className="about-body">
        <div className="about-content">
          <div className="about-team-grid">
            {TEAM.map((person) => (
              <div className="about-person" key={person.name}>
                <img
                  className="about-person-photo"
                  src={person.photo}
                  alt={person.name}
                />
                <div className="about-person-name">{person.name}</div>
                <div className="about-person-role">{person.role}</div>
                {person.bio.map((para, i) => (
                  <p className="about-person-bio" key={i}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
