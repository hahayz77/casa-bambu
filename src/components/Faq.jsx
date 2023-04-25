import { Collapse, Grid, Text } from "@nextui-org/react";

export function Faq({faq}) {
    return (
        <>
            <section id="faq">
                <h1 className="title">Perguntas Frequêntes</h1>
                <div className="faq_container">
                    <Grid>
                        <Collapse.Group shadow>
                            {faq?.map((e)=>{
                                return(
                                    <Collapse title={e.ask}>
                                        <Text>{e.answer}</Text>
                                    </Collapse>
                                )
                            })}
                        </Collapse.Group>
                    </Grid>
                </div>
            </section>
        </>
    )
}