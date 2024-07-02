import './index.css'

const registrationStatus = {
  following: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
  memento: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
  insomnia: '0037d5e4-4005-4030-987b-ce41b691b92a',
  batamnbegins: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
  theprestige: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
  darkknight: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
  inception: '2002',
  darkknightrises: '2003',
  interstellar: '2004',
  dunkirk: '2005',
  tenet: '2006',
  oppenheimer: '2007',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const followingMovie = () => (
    <div className="filmDetails">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/5/55/Following_film_poster.jpg"
        alt="following"
        className="event"
      />
      <h1>Following (1998) </h1>
      <p>
        Following is a 1998 British independent neo-noir crime thriller film
        written, produced, directed, photographed, and edited by Christopher
        Nolan in his feature film directorial debut. It tells the story of a
        young man who follows strangers around the streets of London and is
        drawn into a criminal underworld when he fails to keep his distance.
      </p>
      <div className="avblCont">
        <p>Available on </p>
        <a
          href="https://www.primevideo.com/dp/amzn1.dv.gti.86a9f6fc-68a9-828d-c2a5-15af4a9743bf?autoplay=0&ref_=atv_cf_strg_wb"
          title="following"
        >
          .
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAsVBMVEUamP8AAAABBhoamv8anP8bnv8AAA8AABEAABQbof8AAA0AAAoGIDMVfcoFITwVfNEAAAUYjOcQWpkDBRwXi+IJM1UGJjsOUokMPmIIM1gIJkYZl/gGFDMPXJgCDB8YkPAUdbwSZagSbrcRYakDEyILSHYKP2gTdcUNSH4OT4wILUsFGS0cpf8DEh0LQG8PUoIBCiYINWIFGDEIHDoamfEGJU0Wgd4MPXEGGz8PXJAOZqInWFlmAAANCElEQVR4nO1cDXeiOhMmJFE+ioBgUVkaoSpWq23trnev//+HvTMJWD+6e263sG3fk+ecPQsxkIcwmZnMDDUMDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NjU8JygD0o1n8Edgkz4svSd1eTAkxk4+m8QegIemaZqdT8I9m8mbwPjEBbvb1qLOCREC902cfzeTNoOkN6XTJdvcFFyrzN4/Rk/8FmeO8Az6axCkoAv5He0ONF6NTt0tbBAcM/lcNh58otMFFSvzp2fX1pexwWePMRRiGAoaMvTy/Lby0GrxqNyhPY88XjIoYGyRnoY546hdFnk9iA/kLD2xWPgnxAapbc+FPAF5oMKN59jRcDIejuzRMli4BXM18WzHvD4fDuaCsXIxWq5yx+XA+H86Qu9gM56MkZeVsjJeQccaYyOdbeTIq0oo8tG162HQzSHzePHXmb4lDbvoD4ppmFJkWGftcPtKABAEp7WRK3Ij0KSN4fo2TGsIh2d4uVqRjSmVPkgIe3MJji7iFos78kUM62Gi55Kps3h4wrxcAY9cxrY5lIXv32meSumOaJJtLRkGfMTRJ1nUMl8TYsUu6ltnt4q+RSQLHiuSxaTqPQq4DP3Dhxh3Hwbu607Jxg8D8Xhc5Bc5qeW0GaHbITLCKekTwuSwTZp1W1IGWpA6XkJteL8IrkDyeyHaTlBQFDl5jZAXLwaBHLJibedq0yFTUnU3ux34xkvxcj1bU4SVIASY5u6BujrLC929Xct5v5niSbeWjo8XlCwLMyT4Uwse7dnp+09OuqDvPIQclZscjV44N6k9RtwhwKosivJh1d+BzuMZOsN0ZCTyhMzwhiW2w3drCG9mwqnkJrVZUtEPdHStjw25xbHf8vZ51EqcUFDZoxHPqwTBUixHbuyOpUnkWVNR5v4vPnaJKp7K/0x51ZX28nhxSHKgflNqvqMfY3hnJbjxzK+p0HuCBNEfpHjy3rtkydbZTEhPTA/W64y+oG69SpwLlm2wKz/P9O/kml2E7y7QWGCrm8pX7B+oHr+Vt1OMlLn61xIlc7VnjNul01o2KuvefqdNT6sEJ9UiqzgjUOrkT7VFX/MJhU9Sdl1knpFe24HOeUx/IVx6+l3o4gLuS3M/7d/3CN+650Xwc5Ew5eo+ox7bvpm7MYQrIgjPbtllLe8KzWc+lTVmkxvuoG2wBR5YpWvB1z6h3t8LmlNr+Fs06KYz3UueFvHpDOfr3lNm8Bc9R+TDd1Z0fe/01ulzBKPxj6rVJMowp+FwmGRQhOBVxuRjnbXmOYEERETq9TkHZu6nzAv3F6KBjyF3j0147vdJNlP4rSVKDvpc6Rdexi3eMIulaOv2WqFu9EXHkQIQkaqcgBqTTcY4dAcdx5C4JDGjQ6ZCDNXXgZFBRl50kdZr2LaJoSw1/2xJ1dxzfqq3lj9p40OTx27ftj8OAfAPn356QovgHDh9V5JSK5294IvtR/wecWNWGiPqbg7iM89as6Q/KWViWpeBVcAL8XIy70JfFxTieyyOGP9WRg1TGZ5TjqU7qkAdjvMz7/bvCE21E5mvqKQ6MmuwoDnPc7yKU8jsq6aED3BPQThzmzP36Sji1pl8KX3vWra87624UBV+T+phYXfKUthSNbROpDzvfMqYX2o5RDr725QPRz5NBpTJwftnOWZ5loX35AxM739+Jz5tUYjtpwV9xPYT8Ye19Xu5PMttILnwPFTSyrj4t9SrSG5GLwDgLPz11GY54hTr97NQNuiEWxn4u/a7PT13MV9PV1WWi9AtQp9wvSuOS36enjnLCzjxtlS19A/U689oSYCsDYC+BNQ4ttgydY/vL0Nw2wlhw+0zD4MPwe5tSdn+6oKnNRRyHBpjkdphTUdwCDuVF1NjncF4yHmJ7LjNAFDZwLP85Xa/XvX4qsEbjaNZpevv0bbXdjvshP7CkfHf3jBdMsbkV6qx0lNWsBuVqK7wSvK82xCoBTONvxLWiyOoQcndCncUJ9OpaVjcgZFPH/6lYyMYoiuD+d2EbE0/FSCYZx7baSwoVXV7YvN+Bca0bOSi4xrIcBjW9RUzrhTqHX7pm9ZtJBhVJ7I/xqOqKQdxCnQBVYZ+IqG0SL2UykQgDqGNAT1Jn4ZLIgIpFJM+XWWex4ggTLzPXZCZXSVg9qeVasjdZNh/LAO47RVYVdfFMJn629gl1KluB+OPmCcN7h1mnYkZkvvehv+/JPmv/kDTtgnD9DFT+nSxakHdmjzA8G2xQqMEOySh1zo+pU6HqvlalDdon3LzIOlNB7R+YZLzf4HGAwSSfyCzMcwk6qlzJwOC08YyvIQOb8MrVK2XeFsN4VmocU2dy0qMb5c4wUStHaoT4pM6zWpyynWy4YUuns7PFOglql6S1aTcovtPuCsNttFDpZhD8I+r21oV5DuZ10uZAXSVBSL9a4fLaGZgIRTZBo0CNe5m9d4ZtSLu9QAkIMg4aeoE5ceJRdiIwMnhNVFzxmLp8UiuawD4QzJhMuQczrmyWua5yvEqorOZrBJDLTk0X7KzDZ1A3wQgF4Ih6fELl2BGQrG4WRen7xT+uZXYtt+DMU4uh8tzU7a2bxrPVeO8UF1jn2md0gvNL9ji9L9SpLAOI6oqWI+ryJVVZBUIsuWR4VRJp9SrzxFLM+ZpuG9RrCS8YuwPV0L2WGvto1j2CxuWX1E2Z28W6GZdgOp3fqixCLdyKevPlDQjmP3ew4ihlWwcmbq6M0xn1aD35BfWXrMuoj3ECroT7unYKlEZqh7qRPhAM3oVSqB0VBDiVdZjTdX5JHSsXrF5eJA8PD1nhKbJsojr4VZi6lvVWnDBeoIEkIb5payrOZl1qPRDWxD6nLpepFXm2SgjUyYJ6WauCFC7FsduKhoGdkJA1avlPS3pexil14/4GD925eqYj6lTOLxaGnehsXul1pA5WtkW9DgCdDKvsWSasKhE9oq4KwK2bnOO2h/u1I8Bo/Axb707P44cUDE5tZU2XsnKPe2o9JC1Vj7PdGugg16BXDXFskkJ0FUz3eh+KNC42wcERwHUKC3tUwO7Jtqnwc1yMzFPTPvJA2MoxeqbmTfPFghU4DhApFXlBHQMbOHzXWg6HyxtJRck6L8wu5rfN4WbxMNsMeu4Y+6dzNdOr+Wa4kt3JvLVNuLLWKBUxPaZumbLUNH6USsbsON2OpaocldNL5bRHlhMELglcq/MsvXhvirYNFD004ZQEJG2NOjUUdXJXZ2Z45qDnUu2Sym1V9wq+zGp7vEvaEKfeI4HLGfys+vdwe1c3k6vGC7+OwBJpVDpevbms9qam2puyckSI2+26YHdK+ctUUWdGtsWtEzKErcW6Wo3M28BWtSpCjWZtMof1lGeYnT2kw1ic9aFF+ujoyYf5bPwYjZIi5GEGP9TpZ8r8fP6oyqRmuVerQC6KZIS12d1RVrakFw/cqXGax1U565foBBVhHIcqSX3SF8xCHO92uzgW9Khyn6Vh7O8Ol/x1HA3Kqu8CXuslPx84i3VhZ9n0d4j/JuJQ//SLLnVdwO+bNDQ0NBqE0o5tKRn+Wja9CVBm22CsAKKl9EDSi1/Jpr8bzE6L+fL6CtG73njNk8cAKVmEjb/T7/41OUHzXw0YzB8QstrHTX5pRlNvdEw7wH+T5mWGx5iDGeRhc+SpH6gSiOtxz6mok+aLetGfnRFJ3mhK5mmY5aXneXKNepMlcg8mTe+rZSY0lfuMYLpvqiRRakT1PRMomhg/kOy1kyKm9qRaVEncpHeN1Uro6D/gS21rp8Tjel3NvJg1I/WMhZMCduksnON9W3N+mUiCivzwX4/y975dyqmXPRGst6YxfjD7b3t/gICm5bRWZleDLObvsCGU2+F+dKXUOaN+2/VWsA1dHKnhXhJy9rbtmewNAmKLfFm9wlVJMcYDq7TVmAA17stBLTWIx2SCm+L/WhgIKoVTEXvJVX2D9VyAmKSDo0R+a2AiH5za72FSeLFgWKPxiwoRWrFmaewV/fnRsy/xow8scwO0X71KWZg5p+TJejlLssIH/rZ9IkNyw8/te6w2meTJbHB1ctk+rj5ChZP93/grIdyIE3KJ6dVyMJolOVpI/KsD0uKAS+vl/Yf5YHk9dc8uSMIqqWGvQdJbDX+9gHLxsD5QCALydkwfvtfqlZdw7v29iIb9fT9YI+038pbdg0EW2geufEhI9teIy5ooMUl6fzDfZJxMxAtxcCKvZN7+b1GXSoMZ/uThjbzdWRGfRtJhkWYf8EUCpWlYbI6pvSo/B6mae2FKz4wAFeEHfUvBmM3DfHS1Wr9GusZ61ZvnoW2/FmD8qJL+KplnU7/4dzYf9FbnE75aDuazrNgZtsw0fiLqh/Gx5lGEvrff5/0Mc9MPSZbn+6KMY2rz3znJH01dguKXaaiu1adr+Dyf5MOH/w56ngXQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND4/8X/AB5Q/FdYZ0pkAAAAAElFTkSuQmCC"
            className="destina"
          />
        </a>
      </div>
    </div>
  )
  const mementoMovie = () => (
    <div className="filmDetailsMemento">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/c/c7/Memento_poster.jpg"
        alt="memento"
        className="event"
      />
      <h1>Memento (2000) </h1>
      <p>
        Memento is a 2000 American neo-noir psychological thriller film written
        and directed by Christopher Nolan, based on the short story "Memento
        Mori" by his brother Jonathan Nolan, which was later published in 2001.
        A man who suffers from anterograde amnesia—resulting in short-term
        memory loss and the inability to form new memories—who uses an elaborate
        system of photographs, handwritten notes, and tattoos in an attempt to
        uncover the perpetrator who killed his wife and caused him to sustain
        the condition.
      </p>
      <div className="avblCont">
        <p>Available on </p>
        <a href="https://www.primevideo.com/detail/Memento/0OBBGHU4BAF5AJXELF088USC35">
          .
          <img
            src="data:image/png;base64,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"
            className="destina"
          />
        </a>
      </div>
    </div>
  )
  const insomniaMovie = () => (
    <div className="filmDetailsInsomnia">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7c/Insomnia2002Poster.jpg"
        alt="insomnia"
        className="event"
      />
      <h1>Insomnia (2002) </h1>
      <p>
        Insomnia is a 2002 American psychological thriller film directed by
        Christopher Nolan and written by Hillary Seitz. It is the only film
        directed by Nolan that he did not write nor cowrite. A remake of the
        1997 Norwegian film of the same name, it stars Al Pacino, Robin Williams
        and Hilary Swank, with Maura Tierney, Martin Donovan, Nicky Katt and
        Paul Dooley in supporting roles.
      </p>
      <div className="avblCont">
        <p>Available on </p>
        <a href="https://www.primevideo.com/detail/Insomnia/0OSECN5JRH36WGRA34M5E5P1FZ">
          .
          <img
            src="data:image/png;base64,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"
            className="destina"
          />
        </a>
      </div>
    </div>
  )
  const batmanbeginsMovie = () => (
    <div className="filmDetailsbatmanbegins">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg"
        alt="batamnbegins"
        className="event"
      />
      <h1>Batman Begins (2005) </h1>
      <p>
        Batman Begins is a 2005 superhero film directed by Christopher Nolan and
        written by Nolan and David S. Goyer. Based on the DC Comics character
        Batman. The film reboots the Batman film series, telling the origin
        story of Bruce Wayne from the death of his parents to his journey to
        become Batman and his fight to stop Ra's al Ghul and the Scarecrow from
        plunging Gotham City into chaos.
      </p>
      <div className="avblContbatman">
        <p>Available on </p>
        <div className="netPrime">
          <a href="https://www.primevideo.com/dp/amzn1.dv.gti.a2a9f741-e51d-3847-eae4-2a7ef39d3ac9?autoplay=0&ref_=atv_cf_strg_wb">
            .
            <img
              src="data:image/png;base64,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"
              className="destina"
            />
          </a>
          <a href="https://www.netflix.com/in/title/70021642?source=35">
            .
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX////jAAD85uf1vb31tbfsb3HlCRXmGCHqXmHzoqXnLjPnLDHym53lAAj/+/ztbnLqTlLoO0DvgIPlAA/wjI/1sLL98PH96+zpRkr0qavue3350tPnIinsaW33w8X619jpVln4ystDGPaRAAABIklEQVRIie2S23KDIBCG9wejRhA1eKgxavL+L9kl9ABOM9PLTofvYhnW/WABiRKJROL/s1lNU34iWVSVaqlTPHT0xkMhNzu7kqsVJq+ISrsEosSNJpSUganIoq6Rk3KzTOLsShoIWrEJKIpE7ONT1M+5yQuOyhqOmRdPLD6w9pgP4sWLZ5/4ECkWqYAFxaKFb3WdtfkWLxcZiZo3OIg3zJ9n/BKr2tWF4ggXI7G3Xe3ERmZBq8suInEDloM4r/jFGVugOYjn7bWojfHiju72PEkgavKiqvKOE/yK7g79c8Dt48QThh7DUVxxp4Fr6jsnmisH3btvj7JsVUMlBF8NCXSh6B5+6TcaRdRIiJloGiT/ctjD7Piq/ocVXq6dSCQSf493w2wM3Ccs+rAAAAAASUVORK5CYII="
              className="destina"
            />
          </a>
        </div>
      </div>
    </div>
  )
  const prestigeMovie = () => (
    <div className="filmDetailsPrestige">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg"
        alt="prestigeMovie"
        className="event"
      />
      <h1>The Prestige (2006) </h1>
      <p>
        The Prestige is a 2006 psychological thriller film directed by
        Christopher Nolan, written by Nolan and his brother Jonathan and based
        on the 1995 novel by Christopher Priest. It stars Hugh Jackman as Robert
        Angier and Christian Bale as Alfred Borden, rival stage magicians in
        Victorian London who feud over a perfect teleportation illusion.
      </p>
      <div className="avblCont">
        <p>Available on </p>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.70b125e2-a9bc-e66f-f87d-118719427116?autoplay=0&ref_=atv_cf_strg_wb">
          .
          <img
            src="data:image/png;base64,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"
            className="destina"
          />
        </a>
      </div>
    </div>
  )
  const darkknightMovie = () => (
    <div className="filmDetailsdarkknight">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
        alt="darkknight"
        className="event"
      />
      <h1>The Dark Knight (2008) </h1>
      <p>
        The Dark Knight is a 2008 superhero film directed by Christopher Nolan,
        Based on the DC Comics superhero Batman, it is the sequel to Batman
        Begins, and the second installment in The Dark Knight trilogy. The plot
        follows the vigilante Batman, police lieutenant James Gordon, and
        district attorney Harvey Dent, who form an alliance to dismantle
        organized crime in Gotham City.
      </p>
      <div className="avblContbatman">
        <p>Available on </p>
        <div className="netPrime">
          <a href="https://www.primevideo.com/dp/amzn1.dv.gti.c4b2f313-10cd-7644-696f-f1327ac44dba?autoplay=0&ref_=atv_cf_strg_wb">
            .
            <img
              src="data:image/png;base64,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"
              className="destina"
            />
          </a>
          <a href="https://www.netflix.com/in/title/70079583?source=35">
            .
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX////jAAD85uf1vb31tbfsb3HlCRXmGCHqXmHzoqXnLjPnLDHym53lAAj/+/ztbnLqTlLoO0DvgIPlAA/wjI/1sLL98PH96+zpRkr0qavue3350tPnIinsaW33w8X619jpVln4ystDGPaRAAABIklEQVRIie2S23KDIBCG9wejRhA1eKgxavL+L9kl9ABOM9PLTofvYhnW/WABiRKJROL/s1lNU34iWVSVaqlTPHT0xkMhNzu7kqsVJq+ISrsEosSNJpSUganIoq6Rk3KzTOLsShoIWrEJKIpE7ONT1M+5yQuOyhqOmRdPLD6w9pgP4sWLZ5/4ECkWqYAFxaKFb3WdtfkWLxcZiZo3OIg3zJ9n/BKr2tWF4ggXI7G3Xe3ERmZBq8suInEDloM4r/jFGVugOYjn7bWojfHiju72PEkgavKiqvKOE/yK7g79c8Dt48QThh7DUVxxp4Fr6jsnmisH3btvj7JsVUMlBF8NCXSh6B5+6TcaRdRIiJloGiT/ctjD7Piq/ocVXq6dSCQSf493w2wM3Ccs+rAAAAAASUVORK5CYII="
              className="destina"
            />
          </a>
        </div>
      </div>
    </div>
  )
  const inceptionMovie = () => (
    <div className="filmDetailsinception">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
        alt="prestigeMovie"
        className="event"
      />
      <h1>Inception (2010) </h1>
      <p>
        Inception is a 2010 science fiction action film[4][5][6] written and
        directed by Christopher Nolan, who also produced it with Emma Thomas,
        his wife. The film stars Leonardo DiCaprio as a professional thief who
        steals information by infiltrating the subconscious of his targets. He
        is offered a chance to have his criminal history erased as payment for
        the implantation of another person's idea into a target's subconscious.
      </p>
      <div className="avblCont">
        <p>Available on </p>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.4eb1c578-2d81-f757-917d-e4c16fbbfebe?autoplay=0&ref_=atv_cf_strg_wb">
          .
          <img
            src="data:image/png;base64,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"
            className="destina"
          />
        </a>
      </div>
    </div>
  )
  const darkknightrisesMovie = () => (
    <div className="filmDetailsdarkknightrises">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg"
        alt="darkknightrises"
        className="event"
      />
      <h1>The Dark Knight Rises (2012) </h1>
      <p>
        The Dark Knight Rises is a 2012 superhero film directed by Christopher
        Nolan, who co-wrote the screenplay with his brother Jonathan Nolan, and
        the story with David S. Goyer.[5] Based on the DC Comics character
        Batman, it is the final installment in Nolan's The Dark Knight trilogy,
        and the sequel to The Dark Knight (2008). Eight years after the events
        of The Dark Knight, the terrorist Bane forces Bruce Wayne to resume his
        role as Batman and save Gotham City from nuclear destruction.
      </p>
      <div className="avblContbatman">
        <p>Available on </p>
        <div className="netPrime">
          <a href="https://www.primevideo.com/dp/amzn1.dv.gti.2eb2f316-ed27-a548-448f-5a090b007709?autoplay=0&ref_=atv_cf_strg_wb">
            .
            <img
              src="data:image/png;base64,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"
              className="destina"
            />
          </a>
          <a href="https://www.netflix.com/in/title/70213514?source=35">
            .
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX////jAAD85uf1vb31tbfsb3HlCRXmGCHqXmHzoqXnLjPnLDHym53lAAj/+/ztbnLqTlLoO0DvgIPlAA/wjI/1sLL98PH96+zpRkr0qavue3350tPnIinsaW33w8X619jpVln4ystDGPaRAAABIklEQVRIie2S23KDIBCG9wejRhA1eKgxavL+L9kl9ABOM9PLTofvYhnW/WABiRKJROL/s1lNU34iWVSVaqlTPHT0xkMhNzu7kqsVJq+ISrsEosSNJpSUganIoq6Rk3KzTOLsShoIWrEJKIpE7ONT1M+5yQuOyhqOmRdPLD6w9pgP4sWLZ5/4ECkWqYAFxaKFb3WdtfkWLxcZiZo3OIg3zJ9n/BKr2tWF4ggXI7G3Xe3ERmZBq8suInEDloM4r/jFGVugOYjn7bWojfHiju72PEkgavKiqvKOE/yK7g79c8Dt48QThh7DUVxxp4Fr6jsnmisH3btvj7JsVUMlBF8NCXSh6B5+6TcaRdRIiJloGiT/ctjD7Piq/ocVXq6dSCQSf493w2wM3Ccs+rAAAAAASUVORK5CYII="
              className="destina"
            />
          </a>
        </div>
      </div>
    </div>
  )
  const interstellarMovie = () => (
    <div className="filmDetailsinterstellar">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        alt="interstellar"
        className="event"
      />
      <h1>Interstellar (2014) </h1>
      <p>
        Interstellar is a 2014 epic science fiction drama film directed by
        Christopher Nolan, who co-wrote it with his brother Jonathan. It stars
        Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen
        Burstyn, Michael Caine, and Matt Damon. Set in a dystopian future where
        Earth is suffering from catastrophic blight and famine, the film follows
        a group of astronauts who travel through a wormhole near Saturn in
        search of a new home for humankind.
      </p>
      <div className="avblContbatman">
        <p>Available on </p>
        <div className="netPrime">
          <a href="https://www.primevideo.com/dp/amzn1.dv.gti.34b17cec-bc76-719d-001b-38f5c7cabde9?autoplay=0&ref_=atv_cf_strg_wb">
            .
            <img
              src="data:image/png;base64,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"
              className="destina"
            />
          </a>
          <a href="https://www.netflix.com/in/title/70305903?source=35">
            .
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX////jAAD85uf1vb31tbfsb3HlCRXmGCHqXmHzoqXnLjPnLDHym53lAAj/+/ztbnLqTlLoO0DvgIPlAA/wjI/1sLL98PH96+zpRkr0qavue3350tPnIinsaW33w8X619jpVln4ystDGPaRAAABIklEQVRIie2S23KDIBCG9wejRhA1eKgxavL+L9kl9ABOM9PLTofvYhnW/WABiRKJROL/s1lNU34iWVSVaqlTPHT0xkMhNzu7kqsVJq+ISrsEosSNJpSUganIoq6Rk3KzTOLsShoIWrEJKIpE7ONT1M+5yQuOyhqOmRdPLD6w9pgP4sWLZ5/4ECkWqYAFxaKFb3WdtfkWLxcZiZo3OIg3zJ9n/BKr2tWF4ggXI7G3Xe3ERmZBq8suInEDloM4r/jFGVugOYjn7bWojfHiju72PEkgavKiqvKOE/yK7g79c8Dt48QThh7DUVxxp4Fr6jsnmisH3btvj7JsVUMlBF8NCXSh6B5+6TcaRdRIiJloGiT/ctjD7Piq/ocVXq6dSCQSf493w2wM3Ccs+rAAAAAASUVORK5CYII="
              className="destina"
            />
          </a>
        </div>
      </div>
    </div>
  )
  const dunkirkMovie = () => (
    <div className="filmDetailsdunkirk">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg"
        alt="dunkirk"
        className="event"
      />
      <h1>Dunkirk (2017) </h1>
      <p>
        Dunkirk is a 2017 epic historical war thriller film written, directed
        and co-produced by Christopher Nolan that depicts the Dunkirk evacuation
        of World War II from the perspectives of the land, sea and air.
      </p>
      <div className="avblCont">
        <p>Available on </p>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.eab5ebe0-8b57-4d05-eb29-8e6e73728774?autoplay=0&ref_=atv_cf_strg_wb">
          .
          <img
            src="data:image/png;base64,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"
            className="destina"
          />
        </a>
      </div>
    </div>
  )
  const tenetMovie = () => (
    <div className="filmDetailsTenet">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg"
        alt="tenet"
        className="event"
      />
      <h1>Tenet (2020) </h1>
      <p>
        Tenet is a 2020 science fiction action thriller film written and
        directed by Christopher Nolan, who also produced it with his wife Emma
        Thomas. A co-production between the United Kingdom and the United
        States.The film follows a former CIA agent who is recruited into a
        secret organization, tasked with tracing the origin of objects that are
        traveling backwards through time and their connection to an attack from
        the future to the present.
      </p>
      <div className="avblContbatman">
        <p>Available on </p>
        <div className="netPrime">
          <a href="https://www.primevideo.com/dp/amzn1.dv.gti.70bc3013-85fc-7c10-c97f-b982817a4276?autoplay=0&ref_=atv_cf_strg_wb">
            .
            <img
              src="data:image/png;base64,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"
              className="destina"
            />
          </a>
          <a href="https://www.netflix.com/in/title/81198930?source=35">
            .
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX////jAAD85uf1vb31tbfsb3HlCRXmGCHqXmHzoqXnLjPnLDHym53lAAj/+/ztbnLqTlLoO0DvgIPlAA/wjI/1sLL98PH96+zpRkr0qavue3350tPnIinsaW33w8X619jpVln4ystDGPaRAAABIklEQVRIie2S23KDIBCG9wejRhA1eKgxavL+L9kl9ABOM9PLTofvYhnW/WABiRKJROL/s1lNU34iWVSVaqlTPHT0xkMhNzu7kqsVJq+ISrsEosSNJpSUganIoq6Rk3KzTOLsShoIWrEJKIpE7ONT1M+5yQuOyhqOmRdPLD6w9pgP4sWLZ5/4ECkWqYAFxaKFb3WdtfkWLxcZiZo3OIg3zJ9n/BKr2tWF4ggXI7G3Xe3ERmZBq8suInEDloM4r/jFGVugOYjn7bWojfHiju72PEkgavKiqvKOE/yK7g79c8Dt48QThh7DUVxxp4Fr6jsnmisH3btvj7JsVUMlBF8NCXSh6B5+6TcaRdRIiJloGiT/ctjD7Piq/ocVXq6dSCQSf493w2wM3Ccs+rAAAAAASUVORK5CYII="
              className="destina"
            />
          </a>
        </div>
      </div>
    </div>
  )
  const oppenheimerMovie = () => (
    <div className="filmDetailsOppenheimer">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg"
        alt="oppenheimer"
        className="event"
      />
      <h1>Oppenheimer (2023) </h1>
      <p>
        Oppenheimer is a 2023 epic biographical thriller drama film[a] written,
        directed, and produced by Christopher Nolan.[8] It follows the life of
        J. Robert Oppenheimer, the American theoretical physicist who helped
        develop the first nuclear weapons during World War II. Based on the 2005
        biography American Prometheus by Kai Bird and Martin J. Sherwin, the
        film chronicles Oppenheimer's studies, his direction of the Los Alamos
        Laboratory and his 1954 security hearing.
      </p>
      <div className="avblCont">
        <p>Available on </p>
        <a href="https://www.primevideo.com/dp/amzn1.dv.gti.0653d989-0412-4e01-b466-f657bf48121e?autoplay=0&ref_=atv_cf_strg_wb">
          .
          <img
            src="data:image/png;base64,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"
            className="destina"
          />
        </a>
      </div>
    </div>
  )
  const renderNoActiveEventView = () => (
    <div>
      <img
        src="https://cdn.britannica.com/37/255737-050-9BB3FEDA/Christopher-Nolan-Movie-film-director-Oppenheimer-UK-premiere-2023.jpg"
        alt="Nolan"
        className="imageNolan"
      />
      <p className="no-active-event-description">
        Click on any Movie, to view its details
      </p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.following:
        return followingMovie()
      case registrationStatus.memento:
        return mementoMovie()
      case registrationStatus.insomnia:
        return insomniaMovie()
      case registrationStatus.batamnbegins:
        return batmanbeginsMovie()
      case registrationStatus.theprestige:
        return prestigeMovie()
      case registrationStatus.darkknight:
        return darkknightMovie()
      case registrationStatus.inception:
        return inceptionMovie()
      case registrationStatus.darkknightrises:
        return darkknightrisesMovie()
      case registrationStatus.interstellar:
        return interstellarMovie()
      case registrationStatus.dunkirk:
        return dunkirkMovie()
      case registrationStatus.tenet:
        return tenetMovie()
      case registrationStatus.oppenheimer:
        return oppenheimerMovie()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
