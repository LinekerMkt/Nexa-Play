package com.example

import com.example.model.NexaPlayData
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Test

class ExampleUnitTest {
    @Test
    fun testPlansConfiguration() {
        val start = NexaPlayData.planStart
        assertEquals("start", start.id)
        assertEquals("19", start.price)
        assertEquals("90", start.cents)
        assertEquals(1, start.screensCount)

        val premium = NexaPlayData.planPremium
        assertEquals("premium", premium.id)
        assertEquals("49", premium.price)
        assertEquals("90", premium.cents)
        assertEquals(4, premium.screensCount)

        val specialDiscount = NexaPlayData.specialDiscountPlan
        assertEquals("special_2990", specialDiscount.id)
        assertEquals("29", specialDiscount.price)
        assertEquals("90", specialDiscount.cents)
        assertEquals(4, specialDiscount.screensCount)
    }

    @Test
    fun testWhatsAppData() {
        assertEquals("47 9 9714-4452", NexaPlayData.WHATSAPP_FORMATTED)
        assertEquals("5547997144452", NexaPlayData.WHATSAPP_INTERNATIONAL)
    }

    @Test
    fun testSocialProofData() {
        assertTrue(NexaPlayData.whatsAppProofs.isNotEmpty())
        assertTrue(NexaPlayData.instagramProofs.isNotEmpty())

        val firstWp = NexaPlayData.whatsAppProofs.first()
        assertNotNull(firstWp.clientName)
        assertTrue(firstWp.messages.isNotEmpty())

        val firstIg = NexaPlayData.instagramProofs.first()
        assertNotNull(firstIg.username)
        assertTrue(firstIg.messages.isNotEmpty())
    }
}
