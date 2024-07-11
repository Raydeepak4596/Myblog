import { Box, Button, Card, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <>
            <Container >
                <Stack sx={{margin:'5rem 0rem '}} alignItems='center' justifyContent='space-between' direction={{xs:'column' ,sm:'row'}}>
                    <Box sx={{order:{xs:2,sm:1}}} >
                        <Typography >
                            <h2>Hi ! I'm Deepak Kumar<br /></h2>
                            <h4>Fullstack Developer</h4>
                            <p>I'm pasionate of web development last 3 years </p>
                        </Typography>
                        <Button variant='contained'>Details</Button>
                    </Box>
                    <Box  sx={{order:{xs:1,sm:2}}}>
                        <Card component='img' src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' />
                    </Box>
                </Stack>


            </Container>
            <Divider />
            <Container>
                <Box>
                    <Container >
                        <Box sx={{margin:'5rem 0rem'}} textAlign='center' >
                            <h2 color='secondary' >Our Journey </h2>
                            <h4>I share with you all inspirational journey from zero to built company that market value is 25 Billion Carore </h4>
                            <Box sx={{textAlign:'justify'}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto laborum rem quod accusantium recusandae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis quis architecto culpa! Dolores, sunt odit voluptas asperiores omnis eos deserunt labore ullam reiciendis pariatur inventore ex animi est magni quidem qui, corporis iste. Culpa, enim quam. Exercitationem totam modi quam inventore corporis ratione eveniet, dolores distinctio sint rem debitis quis unde odit, deleniti quia! Aut unde exercitationem laboriosam eveniet corrupti iure cum, eaque, aperiam impedit corporis iusto incidunt sint sit placeat voluptates tempore dolore, vitae aliquam veniam similique est pariatur! Tempora culpa ad necessitatibus aspernatur corporis tempore placeat, aperiam consequuntur doloremque odit fugit laboriosam totam obcaecati. Possimus, officiis enim! Quos, tenetur quaerat quidem dolorum unde minus accusamus sit impedit. Alias et sint nisi quasi voluptate accusantium cum? Soluta officiis facilis repellat ad esse exercitationem rem voluptas ipsa iure recusandae molestias corporis, aliquam necessitatibus possimus. Nam totam quasi iste amet iusto consequatur labore vero excepturi earum? Rerum laboriosam odit, consequatur cum aliquam explicabo? Voluptatum laborum recusandae assumenda illum aspernatur dolorem quibusdam, commodi veritatis animi illo, reprehenderit rerum ipsum porro molestias! Fugit distinctio eaque sint optio, nam dicta veritatis ut minima corporis quisquam doloremque ullam consequuntur beatae perspiciatis accusamus ipsa, quo blanditiis numquam suscipit rem facilis molestiae! Autem provident fugiat, non, magni nostrum eum quod aliquam porro aliquid modi incidunt eos laboriosam, architecto sint veniam nulla? Laborum praesentium error inventore voluptatem nesciunt nulla! Nobis dignissimos repellat a quos assumenda quam laborum necessitatibus eos, consequatur facilis praesentium earum eaque maxime nihil impedit delectus, adipisci iusto tenetur? Maxime magni officia qui quo beatae!</p>

                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default About