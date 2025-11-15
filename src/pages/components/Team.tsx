import React from "react";

export default function Team() {
  const team = [
    { name: "Ashwin Menon", src: "https://iedc-website-2k25-26.vercel.app/images/team/AshwinMenon.jpg", title: "Student Lead", linkedin: "https://www.linkedin.com/in/ashwin-menon-13168a259" },
    { name: "Anjana Sankar", src: "https://iedc-website-2k25-26.vercel.app/images/team/anjanasankar.jpg", title: "Student Lead", linkedin: "https://www.linkedin.com/in/anjana-sankar-1ba508243/" },
    { name: "Rohit M R", src: "https://iedc-website-2k25-26.vercel.app/images/team/Rohit.jpg", title: "Branding and Marketing Lead", linkedin: "https://www.linkedin.com/in/%20rohit-mr" },
    { name: "Najmudheen K", src: "https://iedc-website-2k25-26.vercel.app/images/team/Najmudheen.jpg", title: "Operations & Quality Lead", linkedin: "https://www.linkedin.com/in/najmudheenk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Anand B Vijay", src: "https://iedc-website-2k25-26.vercel.app/images/team/anand.jpg", title: "Financial Lead", linkedin: "https://www.linkedin.com/in/anandbvijay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Lakshmikha Rejith", src: "https://iedc-website-2k25-26.vercel.app/images/team/Lakshmikha.jpg", title: "Creative and Innovation Lead", linkedin: "https://www.linkedin.com/in/lakshmikha-rejith" },
    { name: "Aisha Nama", src: "https://iedc-website-2k25-26.vercel.app/images/team/Aisha_Nama.jpg", title: "WIE Lead", linkedin: "https://www.linkedin.com/in/aisha-nama-06256b253/" },
    { name: "Abinash Singh", src: "https://iedc-website-2k25-26.vercel.app/images/team/abinash.jpg", title: "Technology Lead", linkedin: "https://www.linkedin.com/in/abinashsinghlalotra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  return (
    <section className="py-12">
      <h2 className="font-serif text-3xl mb-8 pb-2 border-b border-border">CORE TEAM</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
              <img src={member.src} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-lg">{member.name}</div>
            <div className="text-sm text-muted-foreground mb-2">{member.title}</div>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2">
                LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
