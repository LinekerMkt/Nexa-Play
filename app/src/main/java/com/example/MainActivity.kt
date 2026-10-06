package com.example

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBars
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Bolt
import androidx.compose.material.icons.filled.Chat
import androidx.compose.material.icons.filled.LocalFireDepartment
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Shield
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.model.NexaPlayData
import com.example.model.Plan
import com.example.ui.components.CheckoutDialog
import com.example.ui.components.CompatibilityAndFaqSection
import com.example.ui.components.HeroVideoSection
import com.example.ui.components.PricingSection
import com.example.ui.components.SocialProofSection
import com.example.ui.components.SpecialDiscountPopup
import com.example.ui.theme.AccentAmber
import com.example.ui.theme.AccentEmerald
import com.example.ui.theme.DarkBg
import com.example.ui.theme.DarkBorder
import com.example.ui.theme.DarkSurface
import com.example.ui.theme.NexaPlayTheme
import com.example.ui.theme.PrimaryPurple
import com.example.ui.theme.SecondaryCyan
import com.example.ui.theme.TextMuted
import com.example.ui.theme.TextSecondary
import com.example.ui.theme.WhatsAppGreen
import kotlinx.coroutines.launch
import java.net.URLEncoder

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            NexaPlayTheme {
                NexaPlaySalesPageApp()
            }
        }
    }
}

@Composable
fun NexaPlaySalesPageApp() {
    val context = LocalContext.current
    val coroutineScope = rememberCoroutineScope()
    val listState = rememberLazyListState()

    var selectedPlanForCheckout by remember { mutableStateOf<Plan?>(null) }
    var showSpecialDiscountPopup by remember { mutableStateOf(false) }
    var hasDeclinedDiscountOnce by remember { mutableStateOf(false) }

    // Intercepta botão voltar para exibir popup de R$ 29,90 se ainda não exibido
    BackHandler(enabled = !showSpecialDiscountPopup && !hasDeclinedDiscountOnce) {
        showSpecialDiscountPopup = true
    }

    fun openWhatsApp(message: String) {
        try {
            val encoded = URLEncoder.encode(message, "UTF-8")
            val url = "https://wa.me/${NexaPlayData.WHATSAPP_INTERNATIONAL}?text=$encoded"
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
            context.startActivity(intent)
        } catch (e: Exception) {
            Toast.makeText(
                context,
                "WhatsApp: ${NexaPlayData.WHATSAPP_FORMATTED}",
                Toast.LENGTH_LONG
            ).show()
        }
    }

    Scaffold(
        modifier = Modifier
            .fillMaxSize()
            .background(DarkBg),
        contentWindowInsets = WindowInsets(0, 0, 0, 0),
        topBar = {
            NexaPlayTopBar(
                onOpenWhatsApp = {
                    openWhatsApp("Olá! Gostaria de falar com o atendimento oficial do Nexa Play.")
                }
            )
        },
        bottomBar = {
            // Barra inferior fixa de conversão mobile
            NexaPlayStickyBottomBar(
                onCtaClick = {
                    coroutineScope.launch {
                        listState.animateScrollToItem(1) // Scroll para Seção de Preços
                    }
                },
                onWhatsAppClick = {
                    openWhatsApp("Olá! Quero tirar dúvidas sobre o Nexa Play no WhatsApp oficial.")
                }
            )
        },
        floatingActionButton = {
            // Botão Flutuante do WhatsApp
            FloatingActionButton(
                onClick = {
                    openWhatsApp("Olá! Gostaria de falar com o suporte oficial do Nexa Play pelo número 47 9 9714-4452.")
                },
                containerColor = WhatsAppGreen,
                contentColor = Color.White,
                shape = CircleShape,
                modifier = Modifier
                    .padding(bottom = 68.dp)
                    .testTag("floating_whatsapp_button")
                    .shadow(12.dp, CircleShape, spotColor = WhatsAppGreen)
            ) {
                Icon(
                    imageVector = Icons.Default.Chat,
                    contentDescription = "WhatsApp Oficial 47 9 9714-4452",
                    modifier = Modifier.size(28.dp)
                )
            }
        }
    ) { innerPadding ->
        LazyColumn(
            state = listState,
            modifier = Modifier
                .fillMaxSize()
                .background(DarkBg)
                .padding(innerPadding)
        ) {
            // ITEM 0: Hero & Vídeo de Apresentação
            item {
                HeroVideoSection(
                    onScrollToPricing = {
                        coroutineScope.launch {
                            listState.animateScrollToItem(1)
                        }
                    },
                    onOpenWhatsApp = { msg -> openWhatsApp(msg) }
                )
            }

            // ITEM 1: Seção de Preços (Start R$ 19,90 e Premium R$ 49,90)
            item {
                PricingSection(
                    onSelectPlan = { plan ->
                        selectedPlanForCheckout = plan
                    },
                    onTriggerDeclineDiscount = {
                        showSpecialDiscountPopup = true
                    }
                )
            }

            // ITEM 2: Provas Sociais (Conversas WhatsApp & Direct Instagram)
            item {
                SocialProofSection(
                    onSendReviewOnWhatsApp = {
                        openWhatsApp("Olá! Gostaria de enviar meu depoimento sobre o Nexa Play.")
                    }
                )
            }

            // ITEM 3: Compatibilidade, Garantia e FAQ
            item {
                CompatibilityAndFaqSection(
                    onOpenWhatsApp = { msg -> openWhatsApp(msg) }
                )
            }

            // ITEM 4: Rodapé Oficial
            item {
                NexaPlayFooter(
                    onOpenWhatsApp = {
                        openWhatsApp("Olá! Estou no rodapé do Nexa Play e preciso de ajuda.")
                    }
                )
            }
        }
    }

    // Modal de Checkout Interativo
    selectedPlanForCheckout?.let { plan ->
        CheckoutDialog(
            plan = plan,
            onDismiss = { shouldTriggerDecline ->
                selectedPlanForCheckout = null
                if (shouldTriggerDecline) {
                    showSpecialDiscountPopup = true
                }
            },
            onOpenWhatsApp = { msg ->
                selectedPlanForCheckout = null
                openWhatsApp(msg)
            }
        )
    }

    // Popup de R$ 29,90 para o Plano Premium em caso de recusa
    SpecialDiscountPopup(
        isVisible = showSpecialDiscountPopup,
        onDismiss = {
            showSpecialDiscountPopup = false
            hasDeclinedDiscountOnce = true
        },
        onAcceptSpecialOffer = {
            showSpecialDiscountPopup = false
            hasDeclinedDiscountOnce = true
            selectedPlanForCheckout = NexaPlayData.specialDiscountPlan
        }
    )
}

@Composable
fun NexaPlayTopBar(
    onOpenWhatsApp: () -> Unit
) {
    Surface(
        color = DarkSurface,
        modifier = Modifier
            .fillMaxWidth()
            .statusBarsPadding()
            .border(1.dp, DarkBorder)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            // Logo Nexa Play
            Row(
                verticalAlignment = Alignment.CenterVertically
            ) {
                Box(
                    modifier = Modifier
                        .size(34.dp)
                        .clip(RoundedCornerShape(8.dp))
                        .background(
                            Brush.linearGradient(
                                listOf(PrimaryPurple, SecondaryCyan)
                            )
                        ),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = Icons.Default.PlayArrow,
                        contentDescription = "Logo Nexa Play",
                        tint = Color.White,
                        modifier = Modifier.size(20.dp)
                    )
                }

                Spacer(modifier = Modifier.width(10.dp))

                Column {
                    Text(
                        text = "NEXA PLAY",
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Black,
                        color = Color.White,
                        letterSpacing = 1.sp
                    )
                    Text(
                        text = "STREAMING 4K TURBO",
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Bold,
                        color = SecondaryCyan
                    )
                }
            }

            // Botão WhatsApp Topo
            Surface(
                shape = RoundedCornerShape(100.dp),
                color = WhatsAppGreen.copy(alpha = 0.15f),
                border = androidx.compose.foundation.BorderStroke(1.dp, WhatsAppGreen.copy(alpha = 0.5f)),
                modifier = Modifier
                    .clip(RoundedCornerShape(100.dp))
                    .testTag("topbar_whatsapp_button")
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier
                        .padding(horizontal = 10.dp, vertical = 6.dp)
                ) {
                    Box(
                        modifier = Modifier
                            .size(7.dp)
                            .clip(CircleShape)
                            .background(WhatsAppGreen)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = "47 9 9714-4452",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        color = Color.White
                    )
                }
            }
        }
    }
}

@Composable
fun NexaPlayStickyBottomBar(
    onCtaClick: () -> Unit,
    onWhatsAppClick: () -> Unit
) {
    Surface(
        color = DarkSurface,
        modifier = Modifier
            .fillMaxWidth()
            .navigationBarsPadding()
            .border(1.dp, DarkBorder)
            .shadow(16.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = "A PARTIR DE R$ 19,90",
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Bold,
                    color = SecondaryCyan
                )
                Text(
                    text = "Sem Travamentos",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White
                )
            }

            Button(
                onClick = onCtaClick,
                modifier = Modifier
                    .height(44.dp)
                    .testTag("sticky_plans_cta_button"),
                shape = RoundedCornerShape(10.dp),
                colors = ButtonDefaults.buttonColors(containerColor = PrimaryPurple)
            ) {
                Icon(
                    imageVector = Icons.Default.Bolt,
                    contentDescription = null,
                    tint = Color.White,
                    modifier = Modifier.size(16.dp)
                )
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = "VER OFERTAS",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White
                )
            }

            Button(
                onClick = onWhatsAppClick,
                modifier = Modifier
                    .height(44.dp)
                    .testTag("sticky_whatsapp_cta_button"),
                shape = RoundedCornerShape(10.dp),
                colors = ButtonDefaults.buttonColors(containerColor = WhatsAppGreen)
            ) {
                Icon(
                    imageVector = Icons.Default.Chat,
                    contentDescription = null,
                    tint = Color.White,
                    modifier = Modifier.size(16.dp)
                )
            }
        }
    }
}

@Composable
fun NexaPlayFooter(
    onOpenWhatsApp: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color(0xFF070A11))
            .padding(horizontal = 20.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "NEXA PLAY",
            fontSize = 18.sp,
            fontWeight = FontWeight.Black,
            color = Color.White,
            letterSpacing = 1.sp
        )

        Spacer(modifier = Modifier.height(6.dp))

        Text(
            text = "A melhor experiência de entretenimento digital e streaming em alta definição.",
            fontSize = 11.sp,
            color = TextMuted,
            textAlign = TextAlign.Center
        )

        Spacer(modifier = Modifier.height(14.dp))

        Text(
            text = "WhatsApp de Atendimento: ${NexaPlayData.WHATSAPP_FORMATTED}",
            fontSize = 12.sp,
            fontWeight = FontWeight.Bold,
            color = WhatsAppGreen
        )

        Spacer(modifier = Modifier.height(14.dp))

        Text(
            text = "© 2026 Nexa Play Telecom. Todos os direitos reservados.\nPagamento seguro criptografado SSL 256 bits.",
            fontSize = 10.sp,
            color = TextMuted,
            textAlign = TextAlign.Center,
            lineHeight = 15.sp
        )

        Spacer(modifier = Modifier.height(16.dp))
    }
}
