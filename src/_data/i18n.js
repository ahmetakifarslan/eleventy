module.exports = {
  languages: ["tr", "en"],
  tr: {
    home: {
      title: "home.title",
      hero: {
        title: "home.hero.title",
        beginingText: "hero.beginingText",
        dynamicWords: ["hero.one", "hero.two", "hero.three", "hero.four"],
      },
      sectorHighlights: {
        title: "home.sectorHighlights.title",
        animatedText: {
          title: "home.sectorHighlights.animatedText.title",
          subTitle: "home.sectorHighlights.animatedText.subTitle",
          p: "home.sectorHighlights.animatedText.p2",
        },
        storageCapacity: "home.sectorHighlights.storageCapacity",
        storageCapacityUnit: "home.sectorHighlights.storageCapacityUnit",
        storageCapacityText: "home.sectorHighlights.storageCapacityText",

        employeeCount: "home.sectorHighlights.employeeCount",
        employeeText: "home.sectorHighlights.employeeText",
      },
      services: {
        h5: "home.services.h5",
        h2: "home.services.h2",
        sectors: [
          {
            title: "services.sector1",
            imgUrl: "https://www.ekol.com/wp-content/uploads/2025/01/otomotiv_ft_sektorler-1024x576.webp",
            link: "#",
          },
          {
            title: "services.sector2",
            imgUrl: "https://www.ekol.com/wp-content/uploads/2025/01/otomotiv_ft_sektorler-1024x576.webp",
            link: "#",
          },
          {
            title: "services.sector3",
            imgUrl: "https://www.ekol.com/wp-content/uploads/2025/01/otomotiv_ft_sektorler-1024x576.webp",
            link: "#",
          },
        ],
      },
      scrollingTexts: ["text1", "text2", "text3", "text4"],
      introText: {
        p1: "home.introText.p1",
        em: "home.introText.em",
        p2: "home.introText.p2",
      },
      facilities: {
        h5: "home.facilities.h2",
        h2: "home.facilities.h5",
        items: [
          { name: "Sample name", location: "Location" },
          { name: "Sample name2", location: "Location2" },
          { name: "Sample name2", location: "Location2" },
        ],
        buttonText: "home.facilities.buttonText",
      },

      bulletins: {
        h2: "home.bulletins.h2",
        posts: [
          { date: "post1 date", author: "authorname", title: "post title" },
          { date: "post2 date", author: "authorname2", title: "post title2" },
          { date: "post3 date", author: "authorname3", title: "post title3" },
        ],
      },
    },
    about: {
      title: "about.title",
      sections: [
        { id: "1", title: "title" },
        { id: "2", title: "title" },
        { id: "3", title: "title" },
      ],
      history: {
        h2: "about.history.h2",
        paragraphs: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "],
      },
      corporate: {
        h5: "about.corporate.h5",
        h1: "about.corporate.h1",
        executiveBoard: {
          h2: "about.corporate.executiveBoard.h2",
          p: "about.corporate.executiveBoard.p",
          team: [
            { id: 1, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 2, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 3, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 4, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 5, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 6, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
          ],
        },
        board: {
          h2: "about.corporate.board.h2",
          leader: {
            name: "Member Name",
            jobTitle: "JobTitle",
            bio: "Member name description",
            profileImgUrl: "#",
          },
          team: [
            { id: 1, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 2, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
          ],
        },
      },
      mission: {
        h1: "about.mission.h1",
        text: {
          em: "about.mission.em",
          span: "about.mission.span",
        },
      },
      manifest: {
        h1: "about.manifest.h1",
        imageUrl: "#",
        texts: ["about.manifest.texts.1", "about.manifest.texts.2", "about.manifest.texts.3", "about.manifest.texts.4"],
      },

      values: {
        h1: "about.values.h1",
        items: [
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
        ],
      },
    },
    services: {
      hero: {
        h1: "services.hero.h1",
        p: "services.hero.p",
        imgUrl: "#",
        srcSet: [],
      },
      storage: {
        textBlocks: [
          {
            h4: "services.storage.textBlocks.h4",
            paragraphs: ["services.storage.textBlocks.paragraphs.p", "services.storage.textBlocks.paragraphs.p2"],
          },
        ],
      },

      duty: {
        h1: "services.duty.h1",
        textBlocks: [
          {
            h4: "services.duty.textBlocks.h4",
            paragraphs: ["services.duty.textBlocks.paragraphs.p", "services.duty.textBlocks.paragraphs.p2"],
            imgUr: "#",
          },
        ],
      },
      projectManagement: {
        h1: "services.projectManagement.h1",
        textBlocks: [
          {
            h4: "services.duty.textBlocks.h4",
            paragraphs: ["services.duty.textBlocks.paragraphs.p", "services.duty.textBlocks.paragraphs.p2"],
            imgUr: "#",
          },
        ],
      },
      technology: {
        h1: "services.technology.h1",
        textBlocks: [
          {
            h4: "services.technology.textBlocks.h4",
            paragraphs: ["services.technology.textBlocks.paragraphs.p", "services.technology.textBlocks.paragraphs.p2"],
            imgUr: "#",
          },
        ],
      },

      getContact: {
        h2: "services.getContact.h2",
        p: "services.getContact.p",
      },
    },
  },
  en: {
    home: {
      title: "home.title",
      hero: {
        title: "home.hero.title",
        beginingText: "hero.beginingText",
        dynamicWords: ["hero.one", "hero.two", "hero.three", "hero.four"],
      },
      sectorHighlights: {
        title: "home.sectorHighlights.title",
        animatedText: {
          title: "home.sectorHighlights.animatedText.title",
          subTitle: "home.sectorHighlights.animatedText.subTitle",
          p: "home.sectorHighlights.animatedText.p2",
        },
        storageCapacity: "home.sectorHighlights.storageCapacity",
        storageCapacityUnit: "home.sectorHighlights.storageCapacityUnit",
        storageCapacityText: "home.sectorHighlights.storageCapacityText",

        employeeCount: "home.sectorHighlights.employeeCount",
        employeeText: "home.sectorHighlights.employeeText",
      },
      services: {
        h5: "home.services.h5",
        h2: "home.services.h2",
        sectors: [
          {
            title: "services.sector1",
            imgUrl: "https://fastly.picsum.photos/id/1081/200/200.jpg?hmac=jyxOLb8HFEGU9gP9khyXdMjr1zDV7sT6gv1_mYxlheY",
            link: "#",
          },
          {
            title: "services.sector2",
            imgUrl: "https://fastly.picsum.photos/id/1081/200/200.jpg?hmac=jyxOLb8HFEGU9gP9khyXdMjr1zDV7sT6gv1_mYxlheY",
            link: "#",
          },
          {
            title: "services.sector3",
            imgUrl: "https://fastly.picsum.photos/id/1081/200/200.jpg?hmac=jyxOLb8HFEGU9gP9khyXdMjr1zDV7sT6gv1_mYxlheY",
            link: "#",
          },
          {
            title: "services.sector4",
            imgUrl: "https://fastly.picsum.photos/id/1081/200/200.jpg?hmac=jyxOLb8HFEGU9gP9khyXdMjr1zDV7sT6gv1_mYxlheY",
            link: "#",
          },
        ],
      },
      scrollingTexts: ["text1", "text2", "text3", "text4"],
      introText: {
        p1: "home.introText.p1",
        em: "home.introText.em",
        p2: "home.introText.p2",
      },
      facilities: {
        h5: "home.facilities.h2",
        h2: "home.facilities.h5",
        items: [
          { name: "Sample name", location: "Location" },
          { name: "Sample name2", location: "Location2" },
          { name: "Sample name2", location: "Location2" },
        ],
        buttonText: "home.facilities.buttonText",
      },

      bulletins: {
        h2: "home.bulletins.h2",
        posts: [
          { date: "post1 date", author: "authorname", title: "post title" },
          { date: "post2 date", author: "authorname2", title: "post title2" },
          { date: "post3 date", author: "authorname3", title: "post title3" },
        ],
      },
    },
    about: {
      title: "about.title",
      sections: [
        { id: "1", title: "title" },
        { id: "2", title: "title" },
        { id: "3", title: "title" },
      ],
      history: {
        h2: "about.history.h2",
        paragraphs: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "],
      },
      corporate: {
        h5: "about.corporate.h5",
        h1: "about.corporate.h1",
        executiveBoard: {
          h2: "about.corporate.executiveBoard.h2",
          p: "about.corporate.executiveBoard.p",
          team: [
            { id: 1, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 2, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 3, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 4, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 5, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 6, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
          ],
        },
        board: {
          h2: "about.corporate.board.h2",
          leader: {
            name: "Member Name",
            jobTitle: "JobTitle",
            bio: "Member name description",
            profileImgUrl: "#",
          },
          team: [
            { id: 1, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
            { id: 2, name: "Member Name", jobTitle: "JobTitle", bio: "Member name description", profileImgUrl: "#" },
          ],
        },
      },
      mission: {
        h1: "about.mission.h1",
        text: {
          em: "about.mission.em",
          span: "about.mission.span",
        },
      },
      manifest: {
        h1: "about.manifest.h1",
        imageUrl: "#",
        texts: ["about.manifest.texts.1", "about.manifest.texts.2", "about.manifest.texts.3", "about.manifest.texts.4"],
      },

      values: {
        h1: "about.values.h1",
        items: [
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
          { h2: "card.h2", description: "card description", url: "#", imgUrl: "#" },
        ],
      },
    },
    services: {
      hero: {
        h1: "services.hero.h1",
        p: "services.hero.p",
        imgUrl: "#",
        srcSet: [],
      },
      storage: {
        textBlocks: [
          {
            h4: "services.storage.textBlocks.h4",
            paragraphs: ["services.storage.textBlocks.paragraphs.p", "services.storage.textBlocks.paragraphs.p2"],
          },
        ],
      },

      duty: {
        h1: "services.duty.h1",
        textBlocks: [
          {
            h4: "services.duty.textBlocks.h4",
            paragraphs: ["services.duty.textBlocks.paragraphs.p", "services.duty.textBlocks.paragraphs.p2"],
            imgUr: "#",
          },
        ],
      },
      projectManagement: {
        h1: "services.projectManagement.h1",
        textBlocks: [
          {
            h4: "services.duty.textBlocks.h4",
            paragraphs: ["services.duty.textBlocks.paragraphs.p", "services.duty.textBlocks.paragraphs.p2"],
            imgUr: "#",
          },
        ],
      },
      technology: {
        h1: "services.technology.h1",
        textBlocks: [
          {
            h4: "services.technology.textBlocks.h4",
            paragraphs: ["services.technology.textBlocks.paragraphs.p", "services.technology.textBlocks.paragraphs.p2"],
            imgUr: "#",
          },
        ],
      },

      getContact: {
        h2: "services.getContact.h2",
        p: "services.getContact.p",
      },
    },
  },
};
