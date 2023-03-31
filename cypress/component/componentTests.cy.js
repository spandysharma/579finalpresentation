import App from '../../src/App';
import TitleAndInfo from '../../src/components/p1/TitleAndInfo';
import TwoLevelsDown from '../../src/components/p3/TwoLevelsDown';
import OneLevelDown from '../../src/components/p3/OneLevelDown';
import Problem0 from '../../src/components/problems/Problem0'
import Problem2 from '../../src/components/problems/Problem2';
import { animals, capitals } from '../../src/components/util/arrays'
import Problem3 from '../../src/components/problems/Problem3';
import Problem4 from '../../src/components/problems/Problem4';
import Problem5 from '../../src/components/problems/Problem5';
import Problem7 from '../../src/components/problems/Problem7';
import Problem6 from '../../src/components/problems/Problem6';
import Problem1 from '../../src/components/problems/Problem1';

describe('component tests', () => {
  it('problem 0', () => {
    cy.mount(<Problem0 />)
    cy.get('[class="row row-cols-2"] > div')
      .should((divs) => {
        expect(divs.length).to.equal(2, 'expect two arrays')
      })
      .each((div) => {
        let lis = div.find('ul').children()
        expect(lis.length).to.equal(10, 'expect 10 elements for each array')
        lis.each((index, li) => {
          let text = li.innerText
          if (text.indexOf(',') < 0) {
            expect(text).to.equal(animals[index], 'should match the content in the animals array')
          } else {
            let capital = capitals[index]
            expect(text).to.equal(
              capital.capital + ', ' + capital.name,
              'should match the content in the capital array'
            )
          }
        })
      })
  })

  describe('problem 1',()=>{
    it('TitleAndInfo component test',()=>{
      const title = 'test title';
      const info = 'test info'
      cy.mount(<TitleAndInfo title={title} info={info}/>)
      cy.get('.row h3')
        .then((ele)=>{
          expect(ele.text()).to.equal(title,'expect to pass the correct title parameter')
        })
      cy.get('.row p')
        .then((ele)=>{
          expect(ele.text()).to.equal(info,'expect to pass the correct info parameter')
        })
    })

    it('problem 1',()=>{
      cy.mount(<Problem1 />)
      cy.get('div.row').then(e=>{
        expect(e.find('h3').length===1).to.equal(true,'expect to have a h3 element')
        expect(e.find('p').length===1).to.equal(true, 'expect to have a p element')
      })

    })
  })

  describe('problem 2',()=>{
    it('problem 2',()=>{
      cy.mount(<Problem2 />)
      let num
      cy.get('button')
        .then((ele)=>{
          num=Number(ele.text().replace(/\D/g,''))
        })
      cy.get('button').click()
      cy.get('button')
        .then((ele)=>{
          let temp=Number(ele.text().replace(/\D/g,''))
          expect(temp).to.equal(num+1,'expect to increase the count after clicking')
        })
    })
  })


  describe('problem 3',()=>{
    it('functional check',()=>{
      cy.mount(<Problem3 />)
      let num
      cy.get('button')
        .then((ele=>{
          num=Number(ele.text().replace(/\D/g,''))
        }))
      cy.get('p')
        .each(ele=>{
          expect(ele.text().replace(/\D/g,'')).to.equal('')
        })
      cy.get('button').click()
        .then((ele)=>{
          let temp=Number(ele.text().replace(/\D/g,''))
          expect(temp).to.equal(num+1,'expect to increase the count after clicking')
        })
      cy.get('p')
        .each(ele=>{
          let temp=Number(ele.text().replace(/\D/g,''))
          expect(temp).to.equal(num+1,'expect to increase the count after clicking')
        })
    })

    it('props test',()=>{
      let count=0
      let message=''
      const setCount=cy.spy().as('setCount')
      const setMessage=cy.spy().as('setMessage')
      cy.mount(<OneLevelDown count={count} message={message} setCount={setCount} setMessage={setMessage}/>)
      cy.get('button').click()
      cy.get('@setCount').should('have.been.calledWith',1)
      cy.get('@setMessage').should('have.been.calledWith','Cool Message for when click 1 happens.')
      cy.mount(<TwoLevelsDown count={count} message={message} setCount={setCount} setMessage={setMessage}/>)
      cy.get('button').click()
      cy.get('@setCount').should('have.been.calledWith',1)
      cy.get('@setMessage').should('have.been.calledWith','Cool Message for when click 1 happens.')
    })
  })

  describe('problem 4', () => {
    let response = [...Array(12).keys()].map((item) => {
      return {
        event_title: `TITLE-${item}`,
        description: `DESCRIPTION-${item}`,
      }
    })

    it('loading', () => {
      cy.intercept('GET', 'https://events.umich.edu/day/json?v=2', (req) => {
        req.reply({ body: response, delay: 1000 })
      }).as('request')
      cy.mount(<Problem4 />)
      cy.get('h3').then((ele) => {
        expect(ele.text()).to.equal(
          'LOADING',
          'expect to display loading before fetching successfully'
        )
      })
      cy.wait('@request')
    })

    it('fetch', () => {
      cy.intercept('GET', 'https://events.umich.edu/day/json?v=2', response).as(
        'request'
      )
      cy.mount(<Problem4 />)
      cy.wait('@request').then(() => {
        cy.get('p').should((ele) => {
          expect(ele.length).to.equal(10, 'expect to have 10 elements')
          ele.each((index, value) => {
            let ans =
              '<strong>' +
              response[index].event_title +
              '</strong>: ' +
              response[index].description
            expect(value.innerHTML).to.equal(
              ans,
              'expect to extract event title and description'
            )
          })
        })
      })
    })
  })
  describe('problem 5',()=>{
    it('problem 5',()=>{
      cy.mount(<Problem5 />)
      let testarr=[0,1,2,3,4,22,59]
      testarr.forEach(num=>{
        cy.get('input').type(num)
        let isOdd=!(num%2===0)
        cy.get('p').should(p=>{
          expect(p.attr('class')).to.equal(isOdd?'bg-success':'bg-danger','expect the class of p should change based on the number input')
        })
        cy.get('span:contains("Odd")').should(e=>{
          expect(e.is(':hidden')).to.equal(!isOdd,'expect the odd span hidden if the input number is even')
        })
        cy.get('span:contains("Even")').should(e=>{
          expect(e.is(':hidden')).to.equal(isOdd,'expect the even span hidden if the input number is odd')
        })
      })
    })
  })


  describe('problem 6',()=>{
    beforeEach(()=>{
      cy.mount(<Problem6 />)
      cy.get('button:contains("Start")').as('startBtn')
      cy.get('button:contains("stop")').as('stopBtn')
      cy.get('button:contains("Reset")').as('resetBtn')
      cy.get('output').as('output')
    })

    it('initial state',()=>{
      cy.get('@output').should(output=>{
        expect(output.text()).to.equal('0','expect the initial state is 0')
      })
      cy.get('@startBtn').should(btn=>{
        expect(btn.is(':disabled')).to.equal(false,'expect the start button should be able to click')
      })
      cy.get('@stopBtn').should((btn) => {
        expect(btn.is(':disabled')).to.equal(
          true,
          'The stop button should be disabled'
        )
      })
      cy.get('@resetBtn').should((btn) => {
        expect(btn.is(':disabled')).to.equal(
          true,
          'The reset button should be disabled'
        )
      })
    })

    it('click the start button',()=>{
      let number
      cy.get('@startBtn')
        .click()
        .should((btn) => {
          expect(btn.is(':disabled')).to.equal(
            true,
            'After clicking start button, the start button should be disabled'
          )
        })
      cy.get('@output').should(output=>{
        number=output.text()
      })
        .then((output)=>{
          cy.wait(1000).then(()=>{
            expect(Number(output.text())).to.gt(Number(number),'expect the count number greater than before')
          })
        })
      cy.get('@stopBtn').should(btn=>{
        expect(btn.is(":disabled")).to.equal(false,'expect the stop button should be able to click after the timer starts to count')
      })
      cy.get('@resetBtn').should(btn=>{
        expect(btn.is(':disabled')).to.equal(false,'expect the reset button should be able to click after the timer starts to count')
      })
    })

    it('click the stop button',()=>{
      let text
      cy.get('@startBtn')
        .click()
        .wait(1000)
        .then(() => {
          cy.get('@output')
            .invoke('text')
            .then((t) => {
              text = t
            })
            .then(() => {
              cy.get('@stopBtn').click()
            })
        })
        .wait(400)
        .then(() => {
          cy.get('@startBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              false,
              'After clicking the stop button, the start button should be enabled'
            )
          })
          cy.get('@stopBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              true,
              'After clicking the stop button, the stop button should be disabled'
            )
          })
          cy.get('@resetBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              false,
              'After clicking the stop button, the reset button should be enabled'
            )
          })
          cy.get('@output').should((output) => {
            expect(output.text()).to.equal(text, 'After clicking the stop button, the output text should not change')
          })
        })
    })

    it('click reset button', () => {
      cy.get('@startBtn')
        .click()
        .wait(1000)
        .then(() => {
          cy.get('@resetBtn').click()
        })
        .then(() => {
          cy.get('@startBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              false,
              'After clicking the reset button, the start button should be enabled'
            )
          })
          cy.get('@stopBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              true,
              'After clicking the reset button, the stop button should be disabled'
            )
          })
          cy.get('@resetBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              true,
              'After clicking the reset button, the reset button should be disabled'
            )
          })
          cy.get('@output').should((output) => {
            expect(output.text()).to.equal(
              '0',
              'After clicking the reset button, the output text should reset to the original state'
            )
          })
        })
    })
  })

  describe('problem 7 (Stretch: good challenge but dont worry if you cant do this one.)', () => {
    beforeEach(() => {
      cy.mount(<Problem7 />)
      cy.get('button:contains("Start")').as('startBtn')
      cy.get('button:contains("stop")').as('stopBtn')
      cy.get('button:contains("Reset")').as('resetBtn')
      cy.get('output').as('output')
    })

    it('initial state', () => {
      cy.get('@output').should((output) => {
        expect(output.text()).to.equal(
          'click start to exercise',
          'The initial state of start button should be "click start to exercise"'
        )
      })
      cy.get('@startBtn').should((btn) => {
        expect(btn.is(':disabled')).to.equal(
          false,
          'The start button should be enabled'
        )
      })
      cy.get('@stopBtn').should((btn) => {
        expect(btn.is(':disabled')).to.equal(
          true,
          'The stop button should be disabled'
        )
      })
      cy.get('@resetBtn').should((btn) => {
        expect(btn.is(':disabled')).to.equal(
          true,
          'The reset button should be disabled'
        )
      })
    })

    it('click start button', () => {
      const exercises = ['Jumping jacks', 'Wall sit', 'Push-up', 'Abdominal crunch', 'Step-up onto chair', 'Squat', 'Triceps dip', 'Plank', 'High knees running in place', 'Lunge', 'Push-up and rotation', 'Side plank']
      cy.get('@startBtn')
        .click()
        .should((btn) => {
          expect(btn.is(':disabled')).to.equal(
            true,
            'After clicking start button, the start button should be disabled'
          )
        })
      exercises.forEach(e=>{
        cy.get('@output').should(output=>{
          expect(output.text()).contains(e, `Did not get to exercise ${e}`)
        })
      })
      cy.get('@stopBtn').should((btn) => {
        expect(btn.is(':disabled')).to.equal(
          false,
          'After clcking the start button, the stop button should be enabled'
        )
      })
      cy.get('@resetBtn').should((btn) => {
        expect(btn.is(':disabled')).to.equal(
          false,
          'After clicking the start button, the reset button should be enabled'
        )
      })
    })

    it('click stop button', () => {
      let text
      cy.get('@startBtn')
        .click()
        .wait(400)
        .then(() => {
          cy.get('@output')
            .invoke('text')
            .then((t) => {
              text = t
            })
            .then(() => {
              cy.get('@stopBtn').click()
            })
        })
        .wait(400)
        .then(() => {
          cy.get('@startBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              false,
              'After clicking the stop button, the start button should be enabled'
            )
          })
          cy.get('@stopBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              true,
              'After clicking the stop button, the stop button should be disabled'
            )
          })
          cy.get('@resetBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              false,
              'After clicking the stop button, the reset button should be enabled'
            )
          })
          cy.get('@output').should((output) => {
            expect(output.text()).to.equal(text, 'After clicking the stop button, the output text should not change')
          })
        })
    })

    it('click reset button', () => {
      cy.get('@startBtn')
        .click()
        .wait(400)
        .then(() => {
          cy.get('@resetBtn').click()
        })
        .then(() => {
          cy.get('@startBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              false,
              'After clicking the reset button, the start button should be enabled'
            )
          })
          cy.get('@stopBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              true,
              'After clicking the reset button, the stop button should be disabled'
            )
          })
          cy.get('@resetBtn').should((btn) => {
            expect(btn.is(':disabled')).to.equal(
              true,
              'After clicking the reset button, the reset button should be disabled'
            )
          })
          cy.get('@output').should((output) => {
            expect(output.text()).to.equal(
              'click start to exercise',
              'After clicking the reset button, the output text should reset to the original state'
            )
          })
        })
    })
  })

})
