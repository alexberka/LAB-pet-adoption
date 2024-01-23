const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://static.wikia.nocookie.net/bdf5d77f-f522-4965-ad88-54188cb53d5d",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://e3.365dm.com/23/06/1600x900/dinosaur-chile-sky-news_6190975.jpg?20230618092213"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://www.licm.org/media/filer_public_thumbnails/filer_public/5d/ab/5dabfda1-0f92-49cc-a7a3-94ca5dc83f86/dinosaurs-trex-closeup_680x509.jpg__560x373_q85_crop_subject_location-340,253_subsampling-2_upscale.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://thereelbits.com/wp-content/uploads/2011/08/red-dog004.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://static01.nyt.com/images/2016/03/18/arts/18DINO/18DINO-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://images.ladbible.com/resize?type=jpeg&quality=70&width=1200&fit=contain&gravity=auto&url=https://s3-images.ladbible.com/s3/content/7258a4645f432f89659705bb6ecdd9f9.png"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://i.redd.it/a3f8536mbhga1.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://www.catster.com/wp-content/uploads/2023/11/black-norwegian-forest-cat_Elisa-Putti_Shutterstock-800x533.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://64.media.tumblr.com/8ad0bb54229fc6cb92edc670ac2c8ca1/tumblr_inline_oc8tpiUZVg1qdikaa_540.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://as1.ftcdn.net/v2/jpg/00/03/74/22/1000_F_3742230_Uc35BcsO3YuJ0MLEHR0840qfQqLQXwar.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://www.thesprucepets.com/thmb/Or_tc5C3Jypp_cyPbKYJJJXEjWQ=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1201198563-fe6114423c714faa8cb1418a9b98e192.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://a-z-animals.com/media/2021/11/Oriental-Shorthair-1-1024x535.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://pics.craiyon.com/2023-11-04/bc3d4d33c7a4465492377b649f0b583a.webp"
    }
  ];

  const queueCards = (petsDom) => {
    let domString = "";
    for (const pet of petsDom) {
      domString += `<div class="card pet-display" style="width: 18rem;">
                      <img src="${pet.imageUrl}" class="card-img-top" alt="Photo of ${pet.name}">
                      <div class="card-body">
                        <h5 class="card-title">${pet.name}</h5>
                        <p class="card-text">${pet.color}</p>
                        <p class="card-text">${pet.specialSkill}</p>
                        <p class="card-text pet-type">${pet.type}</p>
                        <button type="button" id="delete--${pet.id}" class="btn btn-danger">Delete</button>
                      </div>
                    </div>`
    }
    renderToDom("#pet-bucket", domString)
  };

  window.addEventListener("load", () => queueCards(pets));

  const petBucket = document.querySelector("#pet-bucket")
  const filterButtons = document.querySelector("#filter-buttons")
  const newPetForm = document.querySelector("form")

  newPetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const getPetType = () => {
      switch (true) {
        case (document.querySelector("#cat-radio").checked):
          return "cat";
        case (document.querySelector("#dog-radio").checked):
          return "dog";
        case (document.querySelector("#dino-radio").checked):
          return "dino";
        default:
          return "other";
      }
    }

    const newPet = {
      id: pets[pets.length-1].id + 1,
      name: newPetForm.petName.value,
      color: newPetForm.petColor.value,
      specialSkill: newPetForm.specialSkills.value,
      type: getPetType(),
      imageUrl: newPetForm.imageUrl.value
    }

    pets.push(newPet);
    queueCards(pets);
    newPetForm.reset();
  })

  petBucket.addEventListener("click", (e) => {
    if (e.target.id.startsWith("delete")) {
      const [,petID] = e.target.id.split("--")
      const delPos = pets.findIndex((del) => del.id === Number(petID))
      pets.splice(delPos, 1)
      console.log(pets)
      queueCards(pets)
    }
  })

  filterButtons.addEventListener(("click"), (e) => {
    const [sortType, ] = e.target.id.split("-")
    if (sortType === "all") {
      queueCards(pets)
    } else {
      queueCards(pets.filter((pet) => pet.type === sortType))
    }
  })

  const renderToDom = (divID, domString) => {
    document.querySelector(divID).innerHTML = domString;
  }
