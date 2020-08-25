import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment Logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment Header on LandingPage {
    header {
      id
      title
      description
      button {
        label
        url
      }

      image {
        alternativeText
        url
      }
    }
  }

  fragment SectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        url
        alternativeText
      }
    }
  }

  fragment SectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }

  fragment SectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment SectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment SectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment PricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment SectionAboutsUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        name
        photo {
          alternativeText
          url
        }
        role
        socialLinks {
          title
          url
        }
        description
      }
    }
  }

  fragment SectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        text
        photo {
          url
        }
      }
    }
  }

  fragment SectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...Logo
      ...Header
      ...SectionAboutProject
      ...SectionTech
      ...SectionConcepts
      ...SectionModules
      ...SectionAgenda
      ...PricingBox
      ...SectionAboutsUs
      ...SectionReviews
      ...SectionFaq
    }
  }
`

export default GET_LANDING_PAGE
