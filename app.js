document.addEventListener("DOMContentLoaded", () => {
  const modal = document.createElement('div');
  const body = document.querySelector('body');
  const contPrjctDet = document.createElement('section');
  const contDetailwrapper = document.createElement("div");
  const heading = document.createElement('h1');
  const contList = document.createElement('ul');
  const contListItem1 = document.createElement('li');
  const contListItem2 = document.createElement('li');
  const contListItem2I = document.createElement('i');
  const contListItem3 = document.createElement('li');
  const contListItem4 = document.createElement('li');
  const contListItem4I = document.createElement('li');
  const contListItem5 = document.createElement('li');
  const figure = document.createElement('figure');
  const imageCont = document.createElement('img');
  const contListLang = document.createElement('ul');
  const contListLang1 = document.createElement('li');
  const contListLang2 = document.createElement('li');
  const contListLang3 = document.createElement('li');
  const langText = document.createElement('button');
  const langText1 = document.createElement('button');
  const langText2 = document.createElement('button');
  const contButton = document.createElement('div');
  const buttonLive = document.createElement('a');
  const buttonSource = document.createElement('a');
  const iconButtonLive = document.createElement('i');
  const iconButtonSource = document.createElement('i');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const textLangButtonCont = document.createElement('div');
  const contLangBtn = document.createElement('div');
  const textCont = document.createElement('p');
  const close = document.createElement('i');

  // card part

  modal.classList.add('modal-pop-up');
  contPrjctDet.classList.add('pop-prjct-det');
  heading.classList.add('pop-heading-det');
  contList.classList.add('pop-proj-info');
  figure.classList.add('pop-img-cont');
  imageCont.classList.add('pop-img-proj');
  contDetailwrapper.classList.add('cont-prjct-wrapper');
  textLangButtonCont.classList.add('pop-info-cont');
  contLangBtn.classList.add('cont-lang-btn');
  textCont.classList.add('pop-text');
  contListLang.classList.add('cont-list');
  contButton.classList.add('cont-button');
  contListItem1.classList.add('title-info');
  contListItem2.classList.add('icon-dot-cont');
  contListItem2I.classList.add('fas');
  contListItem2I.classList.add('color__circle');
  contListItem3.classList.add('job-info');
  contListItem4.classList.add('icon-dot-cont2');
  contListItem4I.classList.add('fas');
  contListItem4I.classList.add('color__circle');
  contListItem5.classList.add('year-info');
  langText.classList.add('lang-text');
  langText1.classList.add('lang-text');
  langText2.classList.add('lang-text');
  buttonLive.classList.add('btn-live');
  buttonSource.classList.add('btn-source');
  iconButtonLive.classList.add('fas');
  iconButtonSource.classList.add('fab');
  span1.classList.add('live-btn-text');
  span2.classList.add('source-btn-text');
  contListLang1.classList.add('list-lang-item');
  contListLang2.classList.add('list-lang-item');
  contListLang3.classList.add('list-lang-item');
  close.classList.add('fas');
  close.classList.add('close-pop-modal');
  close.classList.add('fa-lg');

  // pop up part
  body.appendChild(modal);
  body.appendChild(contPrjctDet);
  contPrjctDet.appendChild(contDetailwrapper);
  contDetailwrapper.appendChild(close);
  contDetailwrapper.appendChild(heading);
  contDetailwrapper.appendChild(contList);
  contList.appendChild(contListItem1);
  contList.appendChild(contListItem2);
  contListItem2.appendChild(contListItem2I);
  contList.appendChild(contListItem3);
  contList.appendChild(contListItem4);
  contListItem4.appendChild(contListItem4I);
  contList.appendChild(contListItem5);
  contDetailwrapper.appendChild(figure);
  figure.appendChild(imageCont);
  contDetailwrapper.appendChild(textLangButtonCont);
  textLangButtonCont.appendChild(textCont);
  textLangButtonCont.appendChild(contLangBtn);
  contLangBtn.appendChild(contListLang);
  contLangBtn.appendChild(contButton);
  contListLang.appendChild(contListLang1);
  contListLang.appendChild(contListLang2);
  contListLang.appendChild(contListLang3);
  contListLang1.appendChild(langText);
  contListLang2.appendChild(langText1);
  contListLang3.appendChild(langText2);
  contButton.appendChild(buttonLive);
  contButton.appendChild(buttonSource);
  buttonLive.appendChild(span1);
  buttonLive.appendChild(iconButtonLive);
  buttonSource.appendChild(span2);
  buttonSource.appendChild(iconButtonSource);

  // card section part
  const projectInfoCard = [
    {
      img: { url: './Images/Snapshoot-Portfolio1.png", alt: "project' },
      title: 'Tonic',
      prj_info: {
        title: 'CANOPY',
        class: 'fa-circle',
        job: 'Back End Dev',
        year: 2015,
      },
      text_content:
        'A daily selection of privately personalized reads; no accounts orsign-ups required.',
      languages: ['html', 'css', 'javascript'],
      button_project: 'See Project',
      id: "project1",
    },
    {
      img: { url: './Images/snapshot-portfolio2.png", alt: "project'},
      title: 'Multi-Post Stories',
      prj_info: {
        title: 'FACEBOOK',
        class: 'fa-circle',
        job: 'Full Stack Dev',
        year: 2015,
      },
      text_content:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      languages: ["html", "css", "javascript"],
      button_project: 'See Project',
      id: 'project1',
    },
    {
      img: { url: './Images/snapshot-portfolio3.png", alt: "project' },
      title: "Facebook 360",
      prj_info: {
        title: 'FACEBOOK',
        class: 'fa-circle',
        job: 'Full Stack Dev',
        year: 2015,
      },
      text_content:
      ' A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer your car.',      
      languages: ['html', 'css', 'javascript'],
      button_project: 'See Project',
      id: 'project3',
    },
    {
      img: { url: './Images/snapshot-portfolio4.png", alt: "project' },
      title: 'Uber Navigation',
      prj_info: {
        title: 'Uber',
        class: 'fa-circle',
        job: 'Lead Developer',
        year: 2018,
      },
      text_content:
        ' A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      languages: ['html', 'css', 'javascript'],
      button_project: 'See Project',
      id: 'project4',
    },
  ];
  const cardCont = document.querySelector('.container__card');
  for (let i = 0; i < projectInfoCard.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card');
    cardCont.appendChild(card);
    const wrapperCard = document.createElement('div');
    wrapperCard.classList.add('card__img--cont');
    card.appendChild(wrapperCard);
    const figureCard = document.createElement('figure');
    figureCard.classList.add('img-wrapper');
    wrapperCard.appendChild(figureCard);
    const imgCard = document.createElement('img');
    imgCard.classList.add('img__card');
    figureCard.appendChild(imgCard);
    imgCard.setAttribute('src', `${projectInfoCard[i].img.url}`);
    imgCard.setAttribute('alt', `${projectInfoCard[i].img.alt}`);
    const projInfoCardWrap = document.createElement('div');
    projInfoCardWrap.classList.add('prjct-info-wrapper');
    wrapperCard.appendChild(projInfoCardWrap);
    const prjTitleCard = document.createElement('h2');
    prjTitleCard.classList.add('desc__projeect');
    prjTitleCard.textContent = `${projectInfoCard[i].title}`;
    projInfoCardWrap.appendChild(prjTitleCard);
    const ulCardInfo = document.createElement('ul');
    ulCardInfo.classList.add('project__info--cont');
    projInfoCardWrap.appendChild(ulCardInfo);
    const liCardInfoTitle = document.createElement('li');
    liCardInfoTitle.classList.add('project__info--title');
    liCardInfoTitle.textContent = `${projectInfoCard[i].prj_info.title}`;
    ulCardInfo.appendChild(liCardInfoTitle);
    const liCardInfoDotCont = document.createElement("li");
    liCardInfoDotCont.classList.add('project__info--dot');
    ulCardInfo.appendChild(liCardInfoDotCont);
    const iconDotCard1 = document.createElement('i');
    iconDotCard1.classList.add('fas');
    iconDotCard1.classList.add('color__circle');
    iconDotCard1.classList.add(`${projectInfoCard[i].prj_info.class}`);
    liCardInfoDotCont.appendChild(iconDotCard1);
    const jobInfoCard = document.createElement('li');
    jobInfoCard.classList.add('project__info--author');
    jobInfoCard.textContent = `${projectInfoCard[i].prj_info.job}`;
    ulCardInfo.appendChild(jobInfoCard);
    const liCardInfoDotCont1 = document.createElement('li');
    liCardInfoDotCont1.classList.add('project__info--dot');
    ulCardInfo.appendChild(liCardInfoDotCont1);
    const iconDotCard2 = document.createElement('i');
    iconDotCard2.classList.add('fas');
    iconDotCard2.classList.add('olor__circle');
    iconDotCard2.classList.add(`${projectInfoCard[i].prj_info.class}`);
    liCardInfoDotCont1.appendChild(iconDotCard2);
    const liCardInfoYear = document.createElement('li');
    liCardInfoYear.classList.add('project__info--date');
    liCardInfoYear.textContent = `${projectInfoCard[i].prj_info.year}`;
    ulCardInfo.appendChild(liCardInfoYear);
    const ulCradLangCont = document.createElement('ul');
    ulCradLangCont.classList.add('list__lng--btn');
    projInfoCardWrap.appendChild(ulCradLangCont);
    const liCardLangCont = document.createElement('li');
    liCardLangCont.classList.add('lng__btn--cont');
    ulCradLangCont.appendChild(liCardLangCont);
    const buttonLangText = document.createElement('button');
    buttonLangText.setAttribute('type', 'button');
    buttonLangText.classList.add('lng__btn');
    liCardLangCont.appendChild(buttonLangText);
    buttonLangText.textContent = `${projectInfoCard[i].languages[0]}`;

    const liCardLangCont1 = document.createElement('li');
    liCardLangCont1.classList.add('lng__btn--cont');
    ulCradLangCont.appendChild(liCardLangCont1);
    const buttonLangText1 = document.createElement('button');
    buttonLangText1.setAttribute('type", "button');
    buttonLangText1.classList.add('lng__btn');
    liCardLangCont1.appendChild(buttonLangText1);
    buttonLangText1.textContent = `${projectInfoCard[i].languages[1]}`;

    const liCardLangCont2 = document.createElement('li');
    liCardLangCont2.classList.add('lng__btn--cont');
    ulCradLangCont.appendChild(liCardLangCont2);
    const buttonLangText2 = document.createElement('button');
    buttonLangText2.setAttribute('type', 'button');
    buttonLangText2.classList.add('lng__btn');
    liCardLangCont2.appendChild(buttonLangText2);
    buttonLangText2.textContent = `${projectInfoCard[i].languages[2]}`;

    const textParCard = document.createElement('p');
    textParCard.classList.add('project__desc--text');
    projInfoCardWrap.appendChild(textParCard);
    textParCard.textContent = `${projectInfoCard[i].text_content}`;

    const buttonProjLink = document.createElement('button');
    buttonProjLink.setAttribute('type', 'button');
    buttonProjLink.setAttribute('id', `${projectInfoCard[i].id}`);
    buttonProjLink.classList.add('btn-action');
    projInfoCardWrap.appendChild(buttonProjLink);
    buttonProjLink.textContent = `${projectInfoCard[i].button_project}`;
  }
  const projectInfo = {
    project1: {
      title: 'Tonic',
      prj_info: {
        title: 'CANOPY',
        class: 'fa-circle',
        job: 'Back End Dev',
        year: 2015,
      },
      url_img: "./Images/Snapshoot-Portfolio1.png",
      text_content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      languages: ["html", "css", "javascript"],
      button_live: {
        url: "#",
        icon_class: "fa-life-ring",
        btn_live: "See live",
      },
      button_source: {
        url: "#",
        icon_class: "fa-github-square",
        btn_source: "See Source",
      },
    },
    project2: {
      title: "Facebook 360",
      prj_info: {
        title: "FACEBOOK",
        class: "fa-circle",
        job: "Full Stack Dev",
        year: 2015,
      },
      url_img: "./Images/snapshot-portfolio3.png",
      text_content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      languages: ["html", "css", "javascript"],
      button_live: {
        url: "#",
        icon_class: "fa-life-ring",
        btn_live: "See live",
      },
      button_source: {
        url: "#",
        icon_class: "fa-github-square",
        btn_source: "See Source",
      },
    },

    project3: {
      title: "Facebook 360",
      prj_info: {
        title: "FACEBOOK",
        class: "fa-circle",
        job: "Full Stack Dev",
        year: 2015,
      },
      url_img: "./Images/snapshot-portfolio3.png",
      text_content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      languages: ["html", "css", "javascript"],
      button_live: {
        url: "#",
        icon_class: "fa-life-ring",
        btn_live: "See live",
      },
      button_source: {
        url: "#",
        icon_class: "fa-github-square",
        btn_source: "See Source",
      },
    },

    project4: {
      title: "Uber Navigation",
      prj_info: {
        title: "Uber",
        class: "fa-circle",
        job: "Lead Developer",
        year: 2018,
      },
      url_img: "./Images/snapshot-portfolio4.png",
      text_content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      languages: ["html", "css", "javascript"],
      button_live: {
        url: "#",
        icon_class: "fa-life-ring",
        btn_live: "See live",
      },
      button_source: {
        url: "#",
        icon_class: "fa-github-square",
        btn_source: "See Source",
      },
    },
  };

  // pop up section
  const projectButton = document.querySelectorAll(
    "#project1, #project2, #project3, #project4"
  );
  const headingTitle = document.querySelector(".pop-heading-det");
  const titleInfo = document.querySelector(".title-info");
  const contInfoDot = document.querySelector(".icon-dot-cont i");
  const contInfoDot2 = document.querySelector(".icon-dot-cont2 i");
  const jobInfo = document.querySelector(".job-info");
  const yearInfo = document.querySelector(".year-info");
  const imgPop = document.querySelector(".pop-img-proj");
  const prjText = document.querySelector(".pop-text");
  const langBtn = document.querySelectorAll(".lang-text");
  const btnLiveText = document.querySelector(".live-btn-text");
  const btnLiveIcon = document.querySelector(".live-btn-text + .fas");
  const btnSourceText = document.querySelector(".source-btn-text");
  const btnSourceIcon = document.querySelector(".source-btn-text + .fab");

  // card section

  projectButton.forEach((btn) => {
    function popDetail() {
      modal.style.display = "block";
      contPrjctDet.style.display = "block";
      headingTitle.textContent = projectInfo[btn.id].title;
      titleInfo.textContent = projectInfo[btn.id].prj_info.title;
      contInfoDot.classList.add(`${projectInfo[btn.id].prj_info.class}`);
      jobInfo.textContent = projectInfo[btn.id].prj_info.job;
      contInfoDot2.classList.add(`${projectInfo[btn.id].prj_info.class}`);
      yearInfo.textContent = projectInfo[btn.id].prj_info.year;
      imgPop.setAttribute("src", `${projectInfo[btn.id].url_img}`);
      prjText.textContent = projectInfo[btn.id].text_content;
      close.classList.add("fa-times");
      for (let i = 0; i < projectInfo[btn.id].languages.length; i += 1) {
        langBtn[i].textContent = projectInfo[btn.id].languages[i];
      }
      btnLiveText.textContent = projectInfo[btn.id].button_live.btn_live;
      btnSourceText.textContent = projectInfo[btn.id].button_source.btn_source;
      btnLiveIcon.classList.add(
        `${projectInfo[btn.id].button_live.icon_class}`
      );
      btnSourceIcon.classList.add(
        `${projectInfo[btn.id].button_source.icon_class}`
      );
    }
    btn.addEventListener("click", popDetail);
  });
  function closeModal() {
    modal.style.display = "none";
    contPrjctDet.style.display = "none";
  }
  close.addEventListener("click", closeModal);
});

const navMobileClose = document.querySelector(".icon-cont");
const mobileMenu = document.querySelector(".mobile-menu");
const humbMenu = document.querySelector("#open");
const section = document.querySelectorAll(".link-mobile-menu");

function closeMenu() {
  mobileMenu.style.display = "none";
}

navMobileClose.addEventListener("click", closeMenu);
function OpenMenu() {
  mobileMenu.style.display = "block";
}
humbMenu.addEventListener("click", OpenMenu);
section.forEach((item) => {
  item.addEventListener("click", closeMenu);
});
