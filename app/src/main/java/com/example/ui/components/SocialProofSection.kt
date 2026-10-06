package com.example.ui.components

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Call
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.DoneAll
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.Verified
import androidx.compose.material.icons.filled.Videocam
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Tab
import androidx.compose.material3.TabRow
import androidx.compose.material3.TabRowDefaults
import androidx.compose.material3.TabRowDefaults.tabIndicatorOffset
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.model.InstagramProof
import com.example.model.NexaPlayData
import com.example.model.WhatsAppProof
import com.example.ui.theme.AccentAmber
import com.example.ui.theme.AccentEmerald
import com.example.ui.theme.DarkBorder
import com.example.ui.theme.DarkSurface
import com.example.ui.theme.DarkSurfaceVariant
import com.example.ui.theme.InstagramBubble
import com.example.ui.theme.InstagramChatBg
import com.example.ui.theme.InstagramRose
import com.example.ui.theme.PrimaryPurple
import com.example.ui.theme.SecondaryCyan
import com.example.ui.theme.TextMuted
import com.example.ui.theme.TextPrimary
import com.example.ui.theme.TextSecondary
import com.example.ui.theme.WhatsAppBubbleReceived
import com.example.ui.theme.WhatsAppBubbleSent
import com.example.ui.theme.WhatsAppChatBg
import com.example.ui.theme.WhatsAppDarkGreen
import com.example.ui.theme.WhatsAppGreen

@Composable
fun SocialProofSection(
    onSendReviewOnWhatsApp: () -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedTab by remember { mutableIntStateOf(0) } // 0 = WhatsApp, 1 = Instagram Direct

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 20.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Tag Seção
        Surface(
            shape = RoundedCornerShape(100.dp),
            color = AccentEmerald.copy(alpha = 0.15f),
            border = androidx.compose.foundation.BorderStroke(1.dp, AccentEmerald.copy(alpha = 0.4f)),
            modifier = Modifier.padding(bottom = 8.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp)
            ) {
                Icon(
                    imageVector = Icons.Default.Star,
                    contentDescription = null,
                    tint = AccentAmber,
                    modifier = Modifier.size(14.dp)
                )
                Spacer(modifier = Modifier.width(6.dp))
                Text(
                    text = "PROVAS SOCIAIS REAIS • 99.8% SATISFAÇÃO",
                    color = AccentEmerald,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    letterSpacing = 0.5.sp
                )
            }
        }

        Text(
            text = "Quem Assina, Recomenda",
            fontSize = 24.sp,
            fontWeight = FontWeight.Black,
            color = Color.White,
            textAlign = TextAlign.Center
        )

        Text(
            text = "Veja conversas reais de clientes no WhatsApp e Direct do Instagram",
            fontSize = 13.sp,
            color = TextSecondary,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(top = 4.dp, bottom = 18.dp)
        )

        // Seletor de Tabs: WhatsApp vs Instagram Direct
        TabRow(
            selectedTabIndex = selectedTab,
            containerColor = DarkSurfaceVariant,
            contentColor = Color.White,
            indicator = { tabPositions ->
                TabRowDefaults.SecondaryIndicator(
                    modifier = Modifier.tabIndicatorOffset(tabPositions[selectedTab]),
                    color = if (selectedTab == 0) WhatsAppGreen else InstagramRose,
                    height = 3.dp
                )
            },
            modifier = Modifier
                .clip(RoundedCornerShape(14.dp))
                .border(1.dp, DarkBorder, RoundedCornerShape(14.dp))
        ) {
            Tab(
                selected = selectedTab == 0,
                onClick = { selectedTab = 0 },
                modifier = Modifier
                    .padding(vertical = 12.dp)
                    .testTag("tab_whatsapp_proofs")
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .size(10.dp)
                            .clip(CircleShape)
                            .background(WhatsAppGreen)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = "Conversas no WhatsApp",
                        fontWeight = if (selectedTab == 0) FontWeight.Bold else FontWeight.Medium,
                        fontSize = 13.sp,
                        color = if (selectedTab == 0) Color.White else TextMuted
                    )
                }
            }

            Tab(
                selected = selectedTab == 1,
                onClick = { selectedTab = 1 },
                modifier = Modifier
                    .padding(vertical = 12.dp)
                    .testTag("tab_instagram_proofs")
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .size(10.dp)
                            .clip(CircleShape)
                            .background(InstagramRose)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = "Direct do Instagram",
                        fontWeight = if (selectedTab == 1) FontWeight.Bold else FontWeight.Medium,
                        fontSize = 13.sp,
                        color = if (selectedTab == 1) Color.White else TextMuted
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(18.dp))

        // Conteúdo Animado das Provas Sociais
        AnimatedContent(
            targetState = selectedTab,
            transitionSpec = { fadeIn() togetherWith fadeOut() },
            label = "social_proof_tabs"
        ) { tabIndex ->
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                if (tabIndex == 0) {
                    // WhatsApp Conversations List
                    NexaPlayData.whatsAppProofs.forEach { proof ->
                        WhatsAppChatCard(proof = proof)
                    }
                } else {
                    // Instagram Direct Messages List
                    NexaPlayData.instagramProofs.forEach { proof ->
                        InstagramDirectCard(proof = proof)
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(14.dp))

        // CTA para enviar depoimento
        TextButton(
            onClick = onSendReviewOnWhatsApp,
            modifier = Modifier.testTag("send_whatsapp_review_button")
        ) {
            Icon(
                imageVector = Icons.Default.Star,
                contentDescription = null,
                tint = WhatsAppGreen,
                modifier = Modifier.size(16.dp)
            )
            Spacer(modifier = Modifier.width(6.dp))
            Text(
                text = "Envie seu depoimento no WhatsApp: ${NexaPlayData.WHATSAPP_FORMATTED}",
                fontSize = 12.sp,
                color = WhatsAppGreen,
                fontWeight = FontWeight.SemiBold
            )
        }
    }
}

@Composable
fun WhatsAppChatCard(proof: WhatsAppProof) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .border(1.dp, Color(0xFF1E3A2F), RoundedCornerShape(16.dp)),
        colors = CardDefaults.cardColors(containerColor = WhatsAppChatBg),
        shape = RoundedCornerShape(16.dp)
    ) {
        Column {
            // Barra superior de conversa do WhatsApp
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(Color(0xFF1F2C34))
                    .padding(horizontal = 12.dp, vertical = 8.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    // Avatar com iniciais
                    Box(
                        modifier = Modifier
                            .size(36.dp)
                            .clip(CircleShape)
                            .background(
                                Brush.linearGradient(
                                    listOf(Color(0xFF00A884), Color(0xFF005C4B))
                                )
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = proof.avatarInitials,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color.White
                        )
                    }

                    Spacer(modifier = Modifier.width(10.dp))

                    Column {
                        Text(
                            text = proof.clientName,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color.White
                        )
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text(
                                text = proof.clientCity,
                                fontSize = 11.sp,
                                color = TextMuted
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(
                                text = "• ${proof.lastSeen}",
                                fontSize = 11.sp,
                                color = WhatsAppGreen
                            )
                        }
                    }
                }

                // Tag Destaque
                Surface(
                    shape = RoundedCornerShape(6.dp),
                    color = WhatsAppGreen.copy(alpha = 0.2f)
                ) {
                    Text(
                        text = proof.highlightTag,
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        color = WhatsAppGreen,
                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 3.dp)
                    )
                }
            }

            // Balões de Mensagens
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(12.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                proof.messages.forEach { msg ->
                    val isClient = msg.isFromClient
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = if (isClient) Arrangement.Start else Arrangement.End
                    ) {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth(0.85f)
                                .clip(
                                    RoundedCornerShape(
                                        topStart = 12.dp,
                                        topEnd = 12.dp,
                                        bottomStart = if (isClient) 2.dp else 12.dp,
                                        bottomEnd = if (isClient) 12.dp else 2.dp
                                    )
                                )
                                .background(if (isClient) WhatsAppBubbleReceived else WhatsAppBubbleSent)
                                .padding(horizontal = 12.dp, vertical = 8.dp)
                        ) {
                            Column {
                                Text(
                                    text = msg.text,
                                    fontSize = 13.sp,
                                    color = Color.White,
                                    lineHeight = 18.sp
                                )
                                Spacer(modifier = Modifier.height(4.dp))
                                Row(
                                    modifier = Modifier.align(Alignment.End),
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Text(
                                        text = msg.time,
                                        fontSize = 10.sp,
                                        color = TextMuted
                                    )
                                    Spacer(modifier = Modifier.width(4.dp))
                                    Icon(
                                        imageVector = Icons.Default.DoneAll,
                                        contentDescription = "Entregue e lido",
                                        tint = Color(0xFF53BDEB),
                                        modifier = Modifier.size(14.dp)
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun InstagramDirectCard(proof: InstagramProof) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .border(1.dp, Color(0xFF37243B), RoundedCornerShape(16.dp)),
        colors = CardDefaults.cardColors(containerColor = InstagramChatBg),
        shape = RoundedCornerShape(16.dp)
    ) {
        Column {
            // Topo do Direct Instagram
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(Color(0xFF1A1A1A))
                    .padding(horizontal = 12.dp, vertical = 8.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    // Avatar com degradê do Instagram
                    Box(
                        modifier = Modifier
                            .size(36.dp)
                            .clip(CircleShape)
                            .background(
                                Brush.linearGradient(
                                    listOf(InstagramRose, Color(0xFF833AB4), Color(0xFFF77737))
                                )
                            )
                            .padding(2.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .size(32.dp)
                                .clip(CircleShape)
                                .background(Color(0xFF1E1E1E)),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = proof.avatarInitials,
                                fontSize = 12.sp,
                                fontWeight = FontWeight.Bold,
                                color = Color.White
                            )
                        }
                    }

                    Spacer(modifier = Modifier.width(10.dp))

                    Column {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text(
                                text = proof.username,
                                fontSize = 13.sp,
                                fontWeight = FontWeight.Bold,
                                color = Color.White
                            )
                            if (proof.isVerified) {
                                Spacer(modifier = Modifier.width(4.dp))
                                Icon(
                                    imageVector = Icons.Default.Verified,
                                    contentDescription = "Verificado",
                                    tint = Color(0xFF3897F0),
                                    modifier = Modifier.size(14.dp)
                                )
                            }
                        }
                        Text(
                            text = proof.fullName,
                            fontSize = 11.sp,
                            color = TextMuted
                        )
                    }
                }

                // Tag Destaque
                Surface(
                    shape = RoundedCornerShape(6.dp),
                    color = InstagramRose.copy(alpha = 0.2f)
                ) {
                    Text(
                        text = proof.highlightTag,
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        color = InstagramRose,
                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 3.dp)
                    )
                }
            }

            // Balões do Instagram Direct
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(12.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                proof.messages.forEach { msg ->
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.Start
                    ) {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth(0.88f)
                                .clip(RoundedCornerShape(18.dp))
                                .background(InstagramBubble)
                                .padding(horizontal = 14.dp, vertical = 10.dp)
                        ) {
                            Column {
                                Text(
                                    text = msg.text,
                                    fontSize = 13.sp,
                                    color = Color.White,
                                    lineHeight = 18.sp
                                )

                                if (msg.reaction != null) {
                                    Spacer(modifier = Modifier.height(4.dp))
                                    Row(
                                        modifier = Modifier.align(Alignment.End),
                                        verticalAlignment = Alignment.CenterVertically
                                    ) {
                                        Surface(
                                            shape = RoundedCornerShape(100.dp),
                                            color = Color.Black.copy(alpha = 0.5f)
                                        ) {
                                            Text(
                                                text = msg.reaction,
                                                fontSize = 12.sp,
                                                modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
